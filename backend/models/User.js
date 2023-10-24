import mongoose from 'mongoose';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [emailRegex, 'Invalid email addresss'],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxLength: 10,
      minLength: 4,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
