const express = require(`express`);
const router = express.Router();
const carsServices = require(`../services/carsServices`);

router.get("/", (req, res) => {
  const cars = carsServices.getAllCars();
  res.json(cars);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const cars = carsServices.getCarsById(id);
  res.json(cars);
});
router.post("/", (req, res) => {
  const obj = req.body;
  const newObj = carsServices.addCars(obj);
  res.json(newObj);
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const updateCars = carsServices.updateCars(id, obj);
  res.json(updateCars);
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const del = carsServices.deleteCars(id);
  res.json(del);
});
module.exports = router;
