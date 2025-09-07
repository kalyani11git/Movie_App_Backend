import express from "express";
import { getPopularMovies, getMovieDetails, getMovieCast, getMovieReviews, getRecommendedMovies ,searchMovies} from "../controllers/movieController.js";

const router = express.Router();

// Popular movies
router.get("/popular", getPopularMovies);

// Search movies endpoint
router.get("/search", searchMovies);

// Single movie details
router.get("/:id", getMovieDetails);

// Cast & crew
router.get("/:id/cast", getMovieCast);

// Reviews
router.get("/:id/reviews", getMovieReviews);

// Recommendations
router.get("/:id/recommendations", getRecommendedMovies);



export default router;
