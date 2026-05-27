const Category = require('../models/categoryModel');
const Testimonial = require('../models/testimonialModel');
const ServiceBundle = require('../models/serviceBundleModel');
const ComparisonItem = require('../models/comparisonModel');
const Setting = require('../models/settingModel');

// Categories
const getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
};

const createCategory = async (req, res) => {
  const category = new Category(req.body);
  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
};

// Testimonials
const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.json(testimonials);
};

const createTestimonial = async (req, res) => {
  const testimonial = new Testimonial(req.body);
  const createdTestimonial = await testimonial.save();
  res.status(201).json(createdTestimonial);
};

// Service Bundles
const getServiceBundles = async (req, res) => {
  const bundles = await ServiceBundle.find({});
  res.json(bundles);
};

const createServiceBundle = async (req, res) => {
  const bundle = new ServiceBundle(req.body);
  const createdBundle = await bundle.save();
  res.status(201).json(createdBundle);
};

const updateServiceBundle = async (req, res) => {
  try {
    const bundle = await ServiceBundle.findById(req.params.id);
    if (bundle) {
      Object.keys(req.body).forEach(key => {
        bundle[key] = req.body[key];
      });
      const updatedBundle = await bundle.save();
      res.json(updatedBundle);
    } else {
      res.status(404).json({ message: 'Service bundle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteServiceBundle = async (req, res) => {
  try {
    const bundle = await ServiceBundle.findById(req.params.id);
    if (bundle) {
      await ServiceBundle.deleteOne({ _id: bundle._id });
      res.json({ message: 'Service bundle removed' });
    } else {
      res.status(404).json({ message: 'Service bundle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Comparison Items
const getComparisonItems = async (req, res) => {
  const items = await ComparisonItem.find({});
  res.json(items);
};

const createComparisonItem = async (req, res) => {
  const item = new ComparisonItem(req.body);
  const createdItem = await item.save();
  res.status(201).json(createdItem);
};

// Settings
const getSettings = async (req, res) => {
  const settings = await Setting.find({});
  res.json(settings);
};

const updateSetting = async (req, res) => {
  const { key, value } = req.body;
  const setting = await Setting.findOneAndUpdate({ key }, { value }, { upsert: true, new: true });
  res.json(setting);
};

module.exports = {
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
};
