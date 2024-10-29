const express = require("express");
const router = express.Router();

const {createMovie, getAllMovies, getMovieById} = require("../controllers/movie.controller")

router.post("/movie",createMovie)
router.get("/movies",getAllMovies)
router.get("/movie/:id",getMovieById)

module.exports = router;