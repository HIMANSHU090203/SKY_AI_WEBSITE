import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev
const Contact = models.Contact || model<IContact>('Contact', contactSchema);
export default Contact;
