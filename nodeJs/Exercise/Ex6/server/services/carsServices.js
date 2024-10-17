const cars = [
  { id: 1, Model: "Toyota", color: "Black", year: 2021 },
  { id: 2, Model: "volvo", color: "pink", year: 2012 },
  { id: 3, Model: "Honda", color: "white", year: 2004 },
];

const getAllCars = () => {
  return cars;
};

const getCarsById = (id) => {
  const car = cars.find((car) => car.id === +id);
  return car ? car : "Wrong ID";
};
const addCars = (perObj) => {
  const newId = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
  const newCar = { id: newId, ...perObj };
  cars.push(newCar);
  return "Created!";
};
const updateCars = (id, obj) => {
  const index = cars.findIndex((car) => car.id === +id); // Find the index by id
  if (index !== -1) {
    cars[index] = { ...cars[index], ...obj }; // Merge the existing car with the updated values
    cars[index].id = +id; // Ensure the id stays the same
    return "Updated!";
  }
  return "Wrong ID";
};
const deleteCars = (id) => {
  const index = cars.findIndex((car) => car.id === +id); // Find the index by id
  if (index !== -1) {
    cars.splice(index, 1); // Remove the car from the array
    return "Deleted";
  }
  return "Wrong ID";
};
module.exports = { deleteCars, addCars, getAllCars, getCarsById, updateCars };
