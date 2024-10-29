const Movie = require("../models/movies");

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    createMovie,
  };