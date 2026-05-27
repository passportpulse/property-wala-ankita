const express = require('express');
const router = express.Router();
const {
  createSiteVisit,
  getSiteVisits,
  createPartnerApplication,
  getPartnerApplications,
  getAuctions,
  createAuction,
} = require('../controllers/featureController');

router.route('/visits').get(getSiteVisits).post(createSiteVisit);
router.route('/partners').get(getPartnerApplications).post(createPartnerApplication);
router.route('/auctions').get(getAuctions).post(createAuction);

module.exports = router;
