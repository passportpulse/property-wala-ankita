const mongoose = require('mongoose');

const heatmapSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    trend: { type: String, required: true },
    demand: { type: String, required: true },
    color: { type: String, required: true }, // e.g. bg-red-500
    top: { type: String, required: true },   // e.g. 24%
    left: { type: String, required: true },  // e.g. 45%
    size: { type: String, default: "w-24 h-24" }
  },
  {
    timestamps: true,
  }
);

const HeatMap = mongoose.model('HeatMap', heatmapSchema);

module.exports = HeatMap;
