const personsRepo = require('../repositories/personsRepo');

const getAllPersons = (filters) => {
  return personsRepo.getAllPersons(filters);
};

const getAllCities = async () => {
  const persons = await personsRepo.getAllPersons();
  const cities = persons.map((per) => per.city);
  return cities;
};

const getById = (id) => {
  return personsRepo.getById(id);
};

const addPerson = (obj) => {
  return personsRepo.addPerson(obj);
};

const updatePerson = (id, obj) => {
  return personsRepo.updatePerson(id, obj);
};

const deletePerson = (id) => {
  return personsRepo.deletePerson(id);
};

module.exports = {
  getAllPersons,
  getAllCities,
  getById,
  addPerson,
  updatePerson,
  deletePerson,
};
