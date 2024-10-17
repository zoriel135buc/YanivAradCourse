const express = require('express');
const customersService = require('../services/customersService');

const router = express.Router();

// Entry Point: 'http://localhost:3000/customers'

// Get All Customers
router.get('/', async (req, res) => {
  const customers = await customersService.getAllCustomers();
  res.json(customers);
});

module.exports = router;
