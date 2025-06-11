const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require("dotenv").config({ path: __dirname + "/../.env" });
const User = require('../models/User');
const connectDB = require('../config/database');

async function createAdmin() {
  await connectDB();
  const name = 'Admin';
  const email = 'admin@example.com'; // Change as needed
  const password = 'admin123'; // Change as needed

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin user already exists.');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new User({
    name,
    email,
    password: hashedPassword,
    isAdmin: true,
    role: 'admin',
  });
  await admin.save();
  console.log('Admin user created:', email);
  process.exit(0);
}

createAdmin().catch(err => {
  console.error(err);
  process.exit(1);
}); 