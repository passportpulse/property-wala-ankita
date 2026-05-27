const HeatMap = require('../models/heatmapModel');

// @desc    Get all heatmap hotspots
// @route   GET /api/heatmap
const getHeatMap = async (req, res) => {
  try {
    const data = await HeatMap.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a heatmap hotspot
// @route   POST /api/heatmap
const createHotspot = async (req, res) => {
  try {
    const hotspot = new HeatMap(req.body);
    const created = await hotspot.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a heatmap hotspot
// @route   PUT /api/heatmap/:id
const updateHotspot = async (req, res) => {
  try {
    const hotspot = await HeatMap.findById(req.params.id);
    if (hotspot) {
      Object.assign(hotspot, req.body);
      const updated = await hotspot.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Hotspot not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a heatmap hotspot
// @route   DELETE /api/heatmap/:id
const deleteHotspot = async (req, res) => {
  try {
    const hotspot = await HeatMap.findById(req.params.id);
    if (hotspot) {
      await HeatMap.deleteOne({ _id: hotspot._id });
      res.json({ message: 'Hotspot removed' });
    } else {
      res.status(404).json({ message: 'Hotspot not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHeatMap,
  createHotspot,
  updateHotspot,
  deleteHotspot
};
