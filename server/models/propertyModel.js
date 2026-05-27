const mongoose = require('mongoose');

const propertySchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String }], // Changed to array for multiple images
    image: { type: String }, // Keep for backward compatibility
    beds: { type: Number, default: 0 },
    baths: { type: Number, default: 0 },
    sqft: { type: String, required: true },
    facing: { type: String },
    furnishing: { type: String },
    floor: { type: String },
    description: { type: String },
    amenities: [String],
    
    // Additional robust filtering fields
    listingType: { type: String, enum: ['sale', 'rent'], default: 'sale' },
    numericPrice: { type: Number, default: 0 },
    possession: { type: String },
    state: { type: String, default: "West Bengal" },
    constructionStatus: { type: String },
    
    // Flags
    isSpotlight: { type: Boolean, default: false },
    isHotDeal: { type: Boolean, default: false },
    isUrgent: { type: Boolean, default: false },
    isBestBuy: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isStarSeller: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: true },
    
    status: { type: String, enum: ['active', 'negotiation', 'new', 'sold'], default: 'active' },
    views24h: { type: Number, default: 0 },
    
    owner: {
      name: { type: String },
      phone: { type: String },
      email: { type: String }
    }
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
