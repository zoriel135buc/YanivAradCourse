const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const path = require("path");

const moviesRouter = require("./controllers/movieController");

const app = express();
const PORT = 3000;

// Connect to the database
connectDB();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// API route for movies
app.use("/movies", moviesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
