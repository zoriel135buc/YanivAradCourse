const carsRepo = require('../repositories/carsRepo');
import { v4 as uuidv4 } from 'uuid';

const getAllCars = () => {
  return carsRepo.getCars();
};

const addCar = async (car) => {
  const cars = await getAllCars();
  const newCar = { id: uuidv4(), ...car };
  cars.push(newCar);
  carsRepo.setCars(cars);
  return newCar.id;
};

module.exports = {
  getAllCars,
  addCar,
};
