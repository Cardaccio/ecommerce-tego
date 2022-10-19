const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const mercadopago = require('mercadopago');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const Order = require('./models/order');
const Feedback = require('./models/feedback');

const messages = require('../messages.json');
const utils = require('./utils');

// Try to get the config.json file
// Config comes from ENV variables or the config.json file
let config;
try {
  config = require('../config.json');
} catch (e) {
  console.log('No config file found. Using ENV variables');
}

// DB connection
const DB_USER = process.env.DB_USER || config.db.user;
const DB_PASS = process.env.DB_PASS || config.db.pass;
const DB_URL = process.env.DB_URL || config.db.url;
const DB_NAME = process.env.DB_NAME || config.db.name;
const dbUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`;
const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
mongoose.connect(dbUri, connectionParams).catch( (err) => {
  console.error(`Error connecting to the database. \n${err}`);
});

// Mercado Pago
mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_TOKEN || config.mercadopago.token);

// SMTP Server
const mailer = nodemailer.createTransport(
  {
    host: process.env.SMTP_HOST || config.smtp.host,
    port: process.env.SMTP_PORT || config.smtp.port,
    secure: process.env.SMTP_SECURE || config.smtp.secure,
    auth: {
      user: process.env.SMTP_USER || config.smtp.user,
      pass: process.env.SMTP_PASS || config.smtp.pass,
    },
    logger: false,
    debug: false, // include SMTP traffic in the logs
  },
  { // default message fields
    from: process.env.EMAIL_FROM || config.emails.from, // sender address
  },
);
mailer.use('compile', hbs({
  viewPath: path.join(`${__dirname}/emails`), viewEngine: {
    defaultLayout: false,
    layoutsDir: path.join(`${__dirname}/emails`),
    partialsDir: path.join(`${__dirname}/emails/partials`),
  },
}));

// Ports
const httpPort = process.env.HTTP_PORT || config.http_port;
const wsPort = process.env.WS_PORT || config.ws_port;

const httpServer = express();

/**
 * Sends an email
 *
 * @param {string} to List of receivers for the email
 * @param {string} subject Subject of the email
 * @param {string} template Handlebars template to use
 * @param {object} context Context for the handlebars template
 */
function sendMail(to, subject, template, context = {}) {
  mailer.sendMail({
    from: process.env.EMAIL_FROM || config.emails.from,
    to: to,
    subject: subject,
    template: template,
    context: context,
  }, (error, info) => {
    if (error) {
      console.error(error.message);
    }
  });
}

httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(bodyParser.json());

// CORS
httpServer.use(cors());
httpServer.options('*', cors());

// Static files
httpServer.use(express.static(`${__dirname}/../public`));

// Endpoint for getting the list of available jeans
httpServer.get('/jeans', (req, res, next) => {
  res.json(utils.medals);
});

// Endpoint for processing payments
httpServer.post('/payment', (req, res, next) => {
  // Calculate transactionAmount, don't trust the submited value
  const medal = utils.medals[req.body.medal];
  const quantity = req.body.quantity;
  const transactionAmount = medal.price * quantity;

  // Payment data for Mercado Pago
  const payment_data = {
    transaction_amount: transactionAmount,
    token: req.body.cardToken,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    payer: {
      email: req.body.email,
      identification: {
        type: req.body.docType,
        number: req.body.docNumber,
      },
    },
  };

  // Make the payment
  mercadopago.payment.save(payment_data).then((response) => {
    if (response.body.status === 'approved') {
      const order = new Order({
        mercadopagoId: response.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        docType: req.body.docType,
        docNumber: req.body.docNumber,
        department: req.body.department,
        city: req.body.city,
        address: req.body.address,
        medal: medal.name,
        quantity: quantity,
        transactionAmount: transactionAmount,
        status: {
          status: response.status,
          status_detail: response.body.status_detail,
        },
      });

      // Save the order's data
      order.save((err) => {
        if (err) console.error(err);
      });

      // Send email to admin with the order details
      let to = process.env.EMAIL_TO || config.emails.to;
      let subject = messages.emails.order_admin;
      let template = 'order_admin';
      const context = { order: order.toObject() };
      sendMail(to, subject, template, context);

      // Send email to client with the order confirmation & details
      to = order.email;
      subject = messages.emails.order_user;
      template = 'order_user';
      sendMail(to, subject, template, context);
    }

    const message = utils.processResponse(response.body.status_detail);

    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      message: message,
      id: response.body.id,
    });
  }).catch((error) => {
    console.error(error);
    const errors = utils.processErrors(error);
    res.status(error.status).json({ message: errors });
  });
});

httpServer.post('/feedback', (req, res, next) => {
  Order.findOne({ mercadopagoId: req.body.id }, (err, order) => {
    let orderId = undefined;
    if (order) {
      orderId = order._id;
    }

    const feedback = new Feedback({
      order: orderId,
      rate: req.body.rate,
      message: req.body.message,
    });

    feedback.save((err) => {
      if (err) {
        console.error(err);
        return next(err);
      }
    });

    // Send email to admin with the feedback details
    let to = process.env.EMAIL_TO || config.emails.to;
    let subject = messages.emails.feedback_admin;
    let template = 'feedback_admin';
    const context = { feedback: feedback.toObject(), order: order?.toObject() };
    sendMail(to, subject, template, context);
    res.status(200).json({
      status: 200,
    });
  });
});

// Web app
httpServer.get('*', function(req, res) {
  res.sendFile(path.join(`${__dirname}/../index.html`));
});

httpServer.listen(httpPort, () => console.log(`Listening on ${ httpPort }`));
