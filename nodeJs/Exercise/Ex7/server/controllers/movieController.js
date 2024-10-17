const express = require(`express`);
const router = express.Router();
const moviesServices = require(`../services/moviesServices`);

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const movie = await moviesServices.getAllMovies(filters);
    res.json(movie);
  } catch (error) {
    res.json(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await moviesServices.getById(id);
    res.json(movie);
  } catch (error) {
    res.json(error);
  }
});
router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await moviesServices.addMovies(obj);
    res.status(201).json(result);
  } catch (error) {
    res.json(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await moviesServices.updateMovies(id, obj);
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Delete = await moviesServices.DeleteMovie(id);
    res.json(Delete);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
