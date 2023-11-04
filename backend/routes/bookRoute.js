import express from 'express';
import * as bookController from '../controllers/bookController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createABook);

router
  .route('/:id')
  .get(bookController.getABook)
  .put(bookController.updateABook)
  .delete(authMiddleware.authenticateUser, bookController.deleteABook);

export default router;
