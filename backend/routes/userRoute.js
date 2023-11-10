import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router
  .route('/updateUser')
  .put(authMiddleware.authenticateUser, userController.updateUser);

export default router;
