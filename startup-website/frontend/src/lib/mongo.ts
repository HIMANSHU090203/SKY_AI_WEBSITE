import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // ✅ Loads .env.local explicitly

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('❌ Please define the MONGODB_URI environment variable in .env.local');
}

// Extend NodeJS global object to include mongooseCache
declare global {
  // Prevent re-declaration error
  // eslint-disable-next-line no-var
  var mongooseCache: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  } | undefined;
}

// Initialize global cache if not already set
if (!global.mongooseCache) {
  global.mongooseCache = {
    conn: null,
    promise: null,
  };
}

async function dbConnect(): Promise<Connection> {
  if (global.mongooseCache!.conn) return global.mongooseCache!.conn;

  if (!global.mongooseCache!.promise) {
    global.mongooseCache!.promise = mongoose
      .connect(MONGODB_URI as string, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log('✅ MongoDB Atlas connected');
        return mongoose.connection;
      })
      .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        throw err;
      });
  }

  global.mongooseCache!.conn = await global.mongooseCache!.promise;
  return global.mongooseCache!.conn;
}

export default dbConnect;
