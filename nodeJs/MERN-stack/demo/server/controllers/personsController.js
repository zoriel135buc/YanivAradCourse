const express = require('express');
const personsService = require('../services/personsService');

const router = express.Router();

// Entry point: http://localhost:3000/persons

// Get All Persons
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const persons = await personsService.getAllPersons(filters);
    res.json(persons);
  } catch (error) {
    res.json(error);
  }
});

// Get All Cities
router.get('/cities', async (req, res) => {
  try {
    const cities = await personsService.getAllCities();
    res.json(cities);
  } catch (error) {
    res.json(error);
  }
});

// Get a Person By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = await personsService.getById(id);
    res.json(person);
  } catch (error) {
    res.json(error);
  }
});

// Add a new Person
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await personsService.addPerson(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a Person
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await personsService.updatePerson(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete a Person
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await personsService.deletePerson(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
