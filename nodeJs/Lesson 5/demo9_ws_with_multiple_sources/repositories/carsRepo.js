const jf = require('jsonfile');

const FILE = 'data/cars.json';

const getCars = () => {
  return jf.readFile(FILE);
};

const setCars = (cars) => {
  jf.writeFile(FILE, cars);
};

module.exports = {
  getCars,
  setCars,
};
