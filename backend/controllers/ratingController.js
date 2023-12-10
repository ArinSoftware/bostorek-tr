import Rating from '../models/Rating.js';

const createARate = async (req, res) => {
  try {
    const { bookId, rate, userId } = req.body;

    const newRate = await Rating.create({
      rate: rate,
      book: bookId,
      ratedBy: userId,
    });

    return res
      .status(201)
      .json({ message: 'Rating created succesfully', rating: newRate });
  } catch (error) {
    console.error('Error at createARate', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};

const getRatingsForBook = async (req, res) => {
  try {
    const { id } = req.params;

    const ratings = await Rating.find({ book: id }).populate('ratedBy');
    return res
      .status(201)
      .json({ message: 'Comments for book fetched', ratings });
  } catch (error) {
    console.error('Error at getRatingsForBook', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};

export { createARate, getRatingsForBook };
