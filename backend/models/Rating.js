import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    ratedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },

  { timestamps: true }
);

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
