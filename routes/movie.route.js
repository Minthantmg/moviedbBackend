const express = require("express");
const router = express.Router();

const {createMovie, getAllMovies} = require("../controllers/movie.controller")

router.post("/movie",createMovie)
router.get("/movies",getAllMovies)

module.exports = router;