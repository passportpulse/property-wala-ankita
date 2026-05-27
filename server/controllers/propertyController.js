const Property = require('../models/propertyModel');

// Helper to parse price strings to numbers (e.g. "₹65 L" -> 6500000, "₹1.2 Cr" -> 12000000)
const parsePriceToNumeric = (price) => {
  if (!price) return 0;
  if (typeof price === 'number') return price;
  
  let str = price.toString().replace(/[₹\s,]/g, '');
  
  if (str.toLowerCase().endsWith('cr')) {
    return parseFloat(str) * 10000000;
  }
  if (str.toLowerCase().endsWith('l') || str.toLowerCase().endsWith('lakh')) {
    return parseFloat(str) * 100000;
  }
  if (str.toLowerCase().endsWith('k')) {
    return parseFloat(str) * 1000;
  }
  
  const parsed = parseFloat(str);
  return isNaN(parsed) ? 0 : parsed;
};

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  Public
const getProperties = async (req, res) => {
  try {
    const { 
      type, 
      city, 
      location, 
      status, 
      isSpotlight, 
      isHotDeal, 
      isUrgent, 
      isVerified, 
      isBestBuy,
      minPrice,
      maxPrice,
      beds,
      possession,
      state,
      constructionStatus,
      listingType
    } = req.query;
    
    let query = {};
    
    // Exact match filters
    if (listingType) query.listingType = listingType;
    if (type) {
      // Handle case-insensitive and plural matching (e.g. "Flats" vs "Flat")
      const typeReg = new RegExp(`^${type.replace(/s$/, '')}`, 'i');
      query.type = typeReg;
    }
    if (city) query.city = new RegExp(`^${city}$`, 'i');
    if (location) query.location = new RegExp(`^${location}$`, 'i');
    if (status) query.status = status;
    if (state) query.state = new RegExp(`^${state}$`, 'i');
    if (possession) query.possession = new RegExp(`^${possession.replace(/\s+/g, '')}`, 'i');
    if (constructionStatus) query.constructionStatus = constructionStatus;
    
    // Flag filters
    if (isSpotlight) query.isSpotlight = isSpotlight === 'true';
    if (isHotDeal) query.isHotDeal = isHotDeal === 'true';
    if (isUrgent) query.isUrgent = isUrgent === 'true';
    if (isVerified) query.isVerified = isVerified === 'true';
    if (isBestBuy) query.isBestBuy = isBestBuy === 'true';
    
    // Beds / BHK filter
    if (beds) {
      const bedsNum = parseInt(beds.toString().replace(/\D/g, ''));
      if (!isNaN(bedsNum)) {
        if (beds.toString().includes('+')) {
          query.beds = { $gte: bedsNum };
        } else {
          query.beds = bedsNum;
        }
      }
    }
    
    // Numeric budget filters
    if (minPrice || maxPrice) {
      query.numericPrice = {};
      if (minPrice) query.numericPrice.$gte = parseFloat(minPrice);
      if (maxPrice) query.numericPrice.$lte = parseFloat(maxPrice);
    }
    
    const properties = await Property.find(query).sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single property
// @route   GET /api/properties/:id
// @access  Public
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
 
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a property
// @route   POST /api/properties
// @access  Private/Admin
const createProperty = async (req, res) => {
  try {
    const numericPrice = parsePriceToNumeric(req.body.price);
    
    const property = new Property({
      ...req.body,
      numericPrice,
      // Ensure image field is set from images array if not provided
      image: req.body.image || (req.body.images && req.body.images[0]) || '/images/placeholder.jpg'
    });

    const createdProperty = await property.save();
    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a property
// @route   PUT /api/properties/:id
// @access  Private/Admin
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      // Update all fields from body
      Object.keys(req.body).forEach(key => {
        property[key] = req.body[key];
      });

      // Recalculate numericPrice if price was updated
      if (req.body.price) {
        property.numericPrice = parsePriceToNumeric(req.body.price);
      }

      // Maintain backward compatibility for single image field
      if (req.body.images && req.body.images.length > 0) {
        property.image = req.body.images[0];
      }

      const updatedProperty = await property.save();
      res.json(updatedProperty);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a property
// @route   DELETE /api/properties/:id
// @access  Private/Admin
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      await Property.deleteOne({ _id: property._id });
      res.json({ message: 'Property removed' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
