const moviesRepositories = require(`../repositories/moviesRepositories`);

const getAllMovies = (filters) => {
  return moviesRepositories.getAllMovies(filters);
};

const getById = (id) => {
  return moviesRepositories.getById(id);
};
const addMovies = (obj) => {
  return moviesRepositories.addMovies(obj);
};
const updateMovies = (id, obj) => {
  return moviesRepositories.updateMovie(id, obj);
};
const DeleteMovie = (id) => {
  return moviesRepositories.DeleteMovie(id);
};

module.exports = {
  DeleteMovie,
  updateMovies,
  addMovies,
  getById,
  getAllMovies,
};
