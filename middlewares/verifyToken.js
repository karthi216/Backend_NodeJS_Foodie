// middlewares/verifyToken.js
const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secretKey = process.env.WhatIsYourName;

const verifyToken = async (req, res, next) => {
  let token = req.headers.token; // custom 'token' header

  // Also support: Authorization: Bearer <token>
  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && /^Bearer$/i.test(parts[0])) {
      token = parts[1];
    }
  }

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    const vendor = await Vendor.findById(decoded.vendorId);
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    req.vendorId = vendor._id; // use in controller
    next();
  } catch (error) {
    console.error('JWT verify error:', error.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;

