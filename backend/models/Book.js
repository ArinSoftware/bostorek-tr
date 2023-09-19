import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    pageNumber: {
      type: Number,
      min: 1,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
  },

  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
