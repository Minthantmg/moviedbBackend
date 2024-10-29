const express = require("express");
const router = express.Router();

const {createMovie} = require("../controllers/movie.controller")

router.post("/movie",createMovie)

module.exports = router;