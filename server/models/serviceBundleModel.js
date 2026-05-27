const mongoose = require('mongoose');

const serviceBundleSchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  target: { type: String, required: true },
  points: [{
    label: { type: String, required: true },
    desc: { type: String, required: true }
  }],
  bonus: { type: String },
  benefit: { type: String },
  bestFor: { type: String },
  promise: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('ServiceBundle', serviceBundleSchema);
