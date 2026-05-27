const User = require('../models/userModel');
const PartnerApplication = require('../models/partnerModel');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// In-memory store for OTPs
const otpStore = {};

// @desc    Send OTP to mobile number
// @route   POST /api/users/send-otp
// @access  Public
const sendOTP = async (req, res) => {
  const { phone } = req.body;
  if (!phone || phone.length !== 10) {
    return res.status(400).json({ message: 'Invalid 10-digit mobile number' });
  }

  // Generate a random 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  
  // Store the OTP with 5 minutes expiry
  otpStore[phone] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  };

  console.log(`[OTP Engine] Generated OTP for ${phone}: ${otp}`);

  res.json({
    success: true,
    message: `OTP sent successfully to +91 ${phone}`,
    otp, // Included in response for seamless development & testing experience
  });
};

// @desc    Verify OTP and log in / register user
// @route   POST /api/users/verify-otp
// @access  Public
const verifyOTP = async (req, res) => {
  const { phone, otp, role } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ message: 'Phone and OTP are required' });
  }

  // Check if OTP is valid
  const record = otpStore[phone];
  if (!record || record.otp !== otp || record.expiresAt < Date.now()) {
    return res.status(400).json({ message: 'Invalid or expired OTP. Please try again.' });
  }

  // Clear OTP on successful verification
  delete otpStore[phone];

  // Resolve role mapping
  const roleMap = {
    "Buyer Login": "buyer",
    "Seller Login": "seller",
    "Partner Login": "buyer",
    "Developer Login": "developer",
    "Expert Login": "expert"
  };
  const selectedRole = roleMap[role] || role || "buyer";

  // Check database for existing records
  let user = await User.findOne({ phone });
  let partner = await PartnerApplication.findOne({ phone });

  let name = 'User';
  let email = `${phone}@propertywalabhaiya.com`;
  let userRole = selectedRole;

  if (partner) {
    name = partner.name;
    if (partner.email) email = partner.email;
    userRole = partner.type === 'expert' ? 'expert' : 'seller';
  }

  if (user) {
    userRole = user.role;
    name = user.name;
    email = user.email;
  } else {
    // If user record doesn't exist, create it dynamically
    // Check if dynamic email is in use
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      email = `${phone}_${Date.now()}@propertywalabhaiya.com`;
    }

    user = await User.create({
      name,
      email,
      password: Math.random().toString(36).slice(-8), // secure random password
      role: userRole,
      phone,
      isVerified: true
    });
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({
    name,
    email,
    password,
    role: role || 'buyer',
    phone,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

module.exports = { authUser, registerUser, sendOTP, verifyOTP };
