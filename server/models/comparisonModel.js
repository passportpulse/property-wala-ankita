const mongoose = require('mongoose');

const comparisonItemSchema = mongoose.Schema({
  category: { type: String, required: true },
  user: { type: String, required: true },
  seller: { type: String, required: true },
  buyer: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ComparisonItem', comparisonItemSchema);
