const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mercadopagoId: { type: String, unique: true },
  name: String,
  email: String,
  phone: String,
  docType: String,
  docNumber: String,
  department: String,
  city: String,
  address: String,
  medal: String,
  quantity: Number,
  transactionAmount: Number,
  status: {
    status: String,
    status_detail: String,
  },
  date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
