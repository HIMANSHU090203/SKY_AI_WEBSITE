import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // ✅ Loads .env.local explicitly


const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // Don't throw error during build time, only at runtime
  if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
    console.warn('⚠️ MONGODB_URI not defined - database connections will fail at runtime');
  } else if (typeof window === 'undefined') {
    throw new Error('❌ Please define the MONGODB_URI environment variable in .env.local');
  }
}

// Extend globalThis safely
interface MongooseGlobal {
  mongooseCache: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

// Type assertion to let TS know we’ve initialized it
const globalWithMongoose = globalThis as typeof globalThis & MongooseGlobal;

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
  if (!MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined. Please set it in your environment variables.');
  }

  if (globalWithMongoose.mongooseCache.conn) return globalWithMongoose.mongooseCache.conn;

  if (!globalWithMongoose.mongooseCache.promise) {
    globalWithMongoose.mongooseCache.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log('✅ MongoDB connected');
        return mongoose.connection;
      })
      .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        throw err;
      });
  }

  globalWithMongoose.mongooseCache.conn = await globalWithMongoose.mongooseCache.promise;
  return globalWithMongoose.mongooseCache.conn;
}

export default dbConnect;
