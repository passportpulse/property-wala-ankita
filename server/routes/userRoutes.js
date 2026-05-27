const express = require('express');
const router = express.Router();
const { authUser, registerUser, sendOTP, verifyOTP } = require('../controllers/authController');

router.post('/', registerUser);
router.post('/login', authUser);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);

module.exports = router;
