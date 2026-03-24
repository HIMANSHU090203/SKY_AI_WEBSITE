import dbConnect from '../src/app/api/_lib/db';
import User from '../src/lib/models/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config({ path: 'frontend/.env.local' });


async function seedAdmin() {
  await dbConnect();

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

  console.log('✅ Admin user created');
}

seedAdmin().catch((err) => {
  console.error('❌ Error seeding admin:', err);
  process.exit(1);
});
