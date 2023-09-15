import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongo DB connection has been established!');
  } catch (error) {
    console.log('Mongo DB connection has failed', error.message);
    throw error;
  }
};

export default connectDB;
