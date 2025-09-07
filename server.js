import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movies.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

// movie routes
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
