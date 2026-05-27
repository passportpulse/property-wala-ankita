const SiteVisit = require('../models/siteVisitModel');
const PartnerApplication = require('../models/partnerModel');
const Auction = require('../models/auctionModel');

// Site Visits
const createSiteVisit = async (req, res) => {
  try {
    const visit = new SiteVisit(req.body);
    const createdVisit = await visit.save();
    res.status(201).json(createdVisit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSiteVisits = async (req, res) => {
  try {
    const visits = await SiteVisit.find({}).sort({ createdAt: -1 });
    res.json(visits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Partner Applications
const createPartnerApplication = async (req, res) => {
  try {
    const application = new PartnerApplication(req.body);
    const createdApplication = await application.save();
    res.status(201).json(createdApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPartnerApplications = async (req, res) => {
  try {
    const applications = await PartnerApplication.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Auctions
const getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({}).populate('propertyId');
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAuction = async (req, res) => {
  try {
    const auction = new Auction(req.body);
    const createdAuction = await auction.save();
    res.status(201).json(createdAuction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSiteVisit,
  getSiteVisits,
  createPartnerApplication,
  getPartnerApplications,
  getAuctions,
  createAuction,
};
