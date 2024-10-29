const express = require("express");
const router = express.Router();

const {createMovie, getAllMovies, getMovieById, deleteMovie} = require("../controllers/movie.controller")

router.post("/movie",createMovie)
router.get("/movies",getAllMovies)
router.get("/movie/:id",getMovieById)
router.delete("/movie/:id",deleteMovie)

module.exports = router;