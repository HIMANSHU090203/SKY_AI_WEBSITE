import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../_lib/db';
import User from '../../../../lib/models/User';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, newPassword } = await req.json();
  const user = await User.findOne({ email, isAdmin: true });
  if (!user) {
    return NextResponse.json({ message: 'Admin user not found' }, { status: 404 });
  }
  user.password = newPassword;
  await user.save();
  return NextResponse.json({ message: 'Password updated successfully' });
} 