const express = require('express');
const carsService = require('../services/carsService');

const router = express.Router();

// Entry point: http://localhost:3000/cars

// Get All Cars
router.get('/', async (req, res) => {
  try {
    const cars = await carsService.getAllCars();
    res.json(cars);
  } catch (error) {
    res.json(error);
  }
});

// Add a new Car
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await carsService.addCar(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
