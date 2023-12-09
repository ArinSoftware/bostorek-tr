import Comment from '../models/Comment.js';

const createAComment = async (req, res) => {
  try {
    const { bookId, content, userId } = req.body;

    const newComment = await Comment.create({
      content: content,
      book: bookId,
      postedBy: userId,
    });

    return res
      .status(201)
      .json({ message: 'Comment created succesfully', comment: newComment });
  } catch (error) {
    console.error('Error at createAComment', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};

const getCommentsForBook = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await Comment.find({ book: id }).populate('postedBy');
    return res
      .status(201)
      .json({ message: 'Comments for book fetched', comments });
  } catch (error) {
    console.error('Error at getCommentsForBook', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};
const getCommentsByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const comments = await Comment.find({ postedBy: id }).populate('book');
    return res
      .status(201)
      .json({ message: 'Comments for book fetched', comments });
  } catch (error) {
    console.error('Error at getCommentsByUser', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};

export { createAComment, getCommentsForBook, getCommentsByUser };
