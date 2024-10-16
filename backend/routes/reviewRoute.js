import express from 'express';
import { getReview, addReview } from '../controllers/reviewController.js'; // Gunakan ESM

const router = express.Router();

// Define routes
router.get('/', getReview);
router.get('/add', addReview);

export default router; // Ekspor default menggunakan ESM

