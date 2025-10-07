import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
  role: { type: String, default: 'user' },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function seedAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const email = 'admin@sky-ai.in';
    const existing = await User.findOne({ email });

    if (existing) {
      console.log('✅ Admin already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin',
      email,
      password: hashedPassword,
      isAdmin: true,
      role: 'admin',
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@sky-ai.in');
    console.log('🔑 Password: admin123');
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  }
}

seedAdmin();
