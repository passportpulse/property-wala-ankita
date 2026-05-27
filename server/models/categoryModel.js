const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  caption: { type: String, required: true },
  tagline: { type: String, required: true },
  icon: { type: String }, // Optional icon name from lucide
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
