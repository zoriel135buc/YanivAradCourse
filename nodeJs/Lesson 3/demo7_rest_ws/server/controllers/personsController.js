const express = require('express');
const personsService = require('../services/personsService');

const router = express.Router();

// Entry Point: http://localohost:3000/persons

// Get All Persons
router.get('/', (req, res) => {
  const persons = personsService.getAllPersons();
  res.json(persons);
});

// Get a Person by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const person = personsService.getPersonById(id);
  res.json(person);
});

// Add a new person
router.post('/', (req, res) => {
  const newPer = req.body;
  const result = personsService.addPerson(newPer);
  res.json(result);
});

// Update a person
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const obj = req.body;
  const result = personsService.updatePerson(id, obj);
  res.json(result);
});

// Delete a person
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = personsService.deletePerson(id);
  res.json(result);
});

module.exports = router;
