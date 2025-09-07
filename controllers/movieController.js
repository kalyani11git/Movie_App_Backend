import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();


const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  accept: "application/json",
};

// Popular Movies
export const getPopularMovies = async (req, res) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
};

// Movie Details
export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};

// Cast & Crew
export const getMovieCast = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}/credits`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cast & crew" });
  }
};

// Reviews
export const getMovieReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}/reviews`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};

// Recommendations
export const getRecommendedMovies = async (req, res) => {
  try {
    const { id } = req.params;
  
    
    const response = await fetch(`${TMDB_BASE_URL}/movie/${id}/recommendations`, { headers });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};


// Search Movies
export const searchMovies = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ results: [] });

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(
        query
      )}&language=en-US&page=1&include_adult=false`
    );

    const data = await response.json();
  

    res.json({ results: data.results || [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
};





