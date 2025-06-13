import { NextResponse } from 'next/server';
import dbConnect from '../../_lib/db';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await dbConnect();
  const user = await User.findOne({ email, isAdmin: true });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET!, { expiresIn: '30d' });
  return NextResponse.json({ token, _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
}
