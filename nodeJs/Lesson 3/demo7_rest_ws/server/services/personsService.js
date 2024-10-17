const persons = [
  { id: 1, name: "Avi", age: 40 },
  { id: 2, name: "Ron", age: 22 },
  { id: 3, name: "Dana", age: 34 },
  { id: 4, name: "Gili", age: 19 },
];

/* CRUD - Create, Read, Update, Delete */

// GET - Get All - Read
const getAllPersons = () => {
  return persons;
};

// GET - Get By ID - Read
const getPersonById = (id) => {
  const person = persons.find((per) => per.id === +id);
  // find() returns 'undefined' if no element is found
  return person ? person : "Wrong ID";
};

// POST - Add a Person - Create
const addPerson = (perObj) => {
  persons.push(perObj);
  return "Created!";
};

// PUT - Update
const updatePerson = (id, obj) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    persons[index] = obj;
    return "Updated!";
  }
  return "Wrong ID";
};

// DELETE - Delete
const deletePerson = (id) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    persons.splice(index, 1);
    return "Deleted!";
  }
  return "Wrong ID";
};

module.exports = {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
