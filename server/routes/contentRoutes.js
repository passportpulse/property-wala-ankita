const express = require('express');
const router = express.Router();
const {
  getCategories,
  createCategory,
  getTestimonials,
  createTestimonial,
  getServiceBundles,
  createServiceBundle,
  updateServiceBundle,
  deleteServiceBundle,
  getComparisonItems,
  createComparisonItem,
  getSettings,
  updateSetting
} = require('../controllers/contentController');

router.route('/categories').get(getCategories).post(createCategory);
router.route('/testimonials').get(getTestimonials).post(createTestimonial);
router.route('/services').get(getServiceBundles).post(createServiceBundle);
router.route('/services/:id').put(updateServiceBundle).delete(deleteServiceBundle);
router.route('/comparison').get(getComparisonItems).post(createComparisonItem);
router.route('/settings').get(getSettings).post(updateSetting);

module.exports = router;
