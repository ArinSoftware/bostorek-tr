import express from 'express';
import * as commentController from '../controllers/commentController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/book/:id').get(commentController.getCommentsForBook);
router
  .route('/user/:id')
  .get(authMiddleware.authenticateUser, commentController.getCommentsByUser);

router
  .route('/')
  .post(authMiddleware.authenticateUser, commentController.createAComment);

export default router;
