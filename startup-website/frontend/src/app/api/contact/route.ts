import { NextResponse } from 'next/server';
import dbConnect from '../_lib/db';
import Contact from '@/lib/models/Contact';
import jwt from 'jsonwebtoken';
import User from '@/lib/models/User';

// POST /api/contact
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Connect to DB
    await dbConnect();

    // Save contact
    const contact = await Contact.create({ name, email, message });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error: any) {
    console.error('❌ POST /api/contact error:', error.message);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

// GET /api/contact
export async function GET(req: Request) {
  try {
    const auth = req.headers.get('authorization')?.split(' ')[1];
    if (!auth) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    // Decode JWT
    const decoded: any = jwt.verify(auth, process.env.JWT_SECRET!);

    await dbConnect();

    // Check admin
    const user = await User.findById(decoded.id);
    if (!user?.isAdmin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    // Fetch messages
    const msgs = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, messages: msgs });
  } catch (error: any) {
    console.error('❌ GET /api/contact error:', error.message);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
