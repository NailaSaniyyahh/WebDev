import express from "express";
import { getReviews } from "../controllers/reviews.controller.js";

const router = express.Router();

// Route to get all reviews (limited to the latest 100 reviews)
router.get("/reviews", getReviews);

export default router;
