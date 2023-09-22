import express from 'express';
import * as bookController from '../controllers/bookController.js';
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createABook);
router.get('/:id', bookController.getABook);
router.put('/:id', bookController.updateABook);

export default router;
