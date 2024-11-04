import express from "express";
import { createMovie, getMovies } from "../controllers/movies.controller.js";
import upload, { setUploadPath } from "../middleware/uploads.js";

const router = express.Router();

// Route to create a new movie with a poster upload
router.post("/movies", setUploadPath("movies"), upload.single("poster"), createMovie);

// Route to get movies
router.get("/movies", getMovies); // Fetches all movies

export default router;


