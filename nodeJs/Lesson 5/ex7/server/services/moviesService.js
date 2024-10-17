const moviesRepo = require('../repositories/moviesRepo');

const getAllMovies = (filters) => {
  return moviesRepo.getAllMovies(filters);
};

const getById = (id) => {
  return moviesRepo.getById(id);
};

const addMovie = (obj) => {
  return moviesRepo.addMovie(obj);
};

const updateMovie = (id, obj) => {
  return moviesRepo.updateMovie(id, obj);
};

const deleteMovie = (id) => {
  return moviesRepo.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getById,
  addMovie,
  updateMovie,
  deleteMovie,
};
