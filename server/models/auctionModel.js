const mongoose = require('mongoose');

const auctionSchema = mongoose.Schema({
  title: { type: String, required: true },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  city: { type: String, default: "Durgapur" },
  type: { type: String, default: "Bank Auctions" },
  basePrice: { type: String, required: true },
  currentBid: { type: String },
  endTime: { type: Date, required: true },
  status: { type: String, enum: ['upcoming', 'active', 'ended'], default: 'upcoming' },
  description: { type: String },
  image: { type: String },
  
  // Premium details matching the Profit Matrix, Financials, Legal, and Location
  marketValue: { type: String, default: "₹1.10 Cr" },
  reservePrice: { type: String, default: "₹82.5 L" },
  potentialSavings: { type: String, default: "₹27.5 L (25%)" },
  bhaiyaAnalysis: { type: String, default: "Based on recent sales in the same building, this property is being auctioned at nearly 25% below current market rates." },
  
  emd: { type: String, default: "₹8,25,000" },
  bidIncrement: { type: String, default: "₹50,000" },
  paymentSchedule: [{ type: String }],
  
  possessionType: { type: String, default: "Physical Possession" },
  encumbrances: { type: String, default: "None reported" },
  outstandingDues: { type: String, default: "₹45,000" },
  documents: [{ type: String }],
  
  localityScore: { type: String, default: "4.2/5" },
  nearby: { type: String, default: "200m from Metro Station | 1km from City Hospital." },
  heatmapInsight: { type: String, default: "Prices in this sector have grown 8% YoY. High rental demand." },
}, { timestamps: true });

module.exports = mongoose.model('Auction', auctionSchema);
