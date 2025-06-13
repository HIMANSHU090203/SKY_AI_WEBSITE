import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  role: string;
  matchPassword: (entered: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: String, email: String, password: String,
  isAdmin: { type: Boolean, default: false },
  role: { type: String, default: 'user' },
});
userSchema.methods.matchPassword = async function (entered: string) {
  return bcrypt.compare(entered, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
