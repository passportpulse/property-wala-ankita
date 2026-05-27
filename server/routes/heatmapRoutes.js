const express = require('express');
const router = express.Router();
const {
  getHeatMap,
  createHotspot,
  updateHotspot,
  deleteHotspot
} = require('../controllers/heatmapController');

router.route('/').get(getHeatMap).post(createHotspot);
router.route('/:id').put(updateHotspot).delete(deleteHotspot);

module.exports = router;
