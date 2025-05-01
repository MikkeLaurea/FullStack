const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
