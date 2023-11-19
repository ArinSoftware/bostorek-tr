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
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      requred: true,
    },
  },

  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
