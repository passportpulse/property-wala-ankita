const mongoose = require('mongoose');

const partnerApplicationSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  businessName: { type: String },
  city: { type: String, required: true },
  rera: { type: String },
  specialization: [{ type: String }],
  type: { type: String, enum: ['agent', 'expert'], default: 'agent' },
  licenseNumber: { type: String },
  experience: { type: String },
  expertise: [{ type: String }],
  tat: { type: String },
  hasTeam: { type: String },
  fixedFee: { type: String },
  caseStudy: { type: String },
  references: { type: String },
  signature: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('PartnerApplication', partnerApplicationSchema);
