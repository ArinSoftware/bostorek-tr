import express from 'express';
import * as ratingController from '../controllers/ratingController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/book/:id').get(ratingController.getRatingsForBook);

router
  .route('/')
  .post(authMiddleware.authenticateUser, ratingController.createARate);

export default router;
