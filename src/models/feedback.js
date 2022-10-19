const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const feedbackSchema = new Schema({
  order: { type: ObjectId, required: false },
  rate: Number,
  message: String,
  date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
