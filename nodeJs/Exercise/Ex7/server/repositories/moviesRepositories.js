const Movies = require(`../models/moviesModels`);

const getAllMovies = (filters) => {
  return Movies.find(filters);
};
const getById = (id) => {
  return Movies.findById(id);
};
const addMovies = (obj) => {
  const mov = new Movies(obj);
  return mov.save();
};
const updateMovie = (id, obj) => {
  return Movies.findByIdAndUpdate(id, obj);
};
const DeleteMovie = (id) => {
  return Movies.findByIdAndDelete(id);
};

module.exports = { getAllMovies, getById, addMovies, DeleteMovie, updateMovie };
