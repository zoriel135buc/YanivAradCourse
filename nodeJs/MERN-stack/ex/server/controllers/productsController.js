const express = require('express');
const productsService = require('../services/productsService');

const router = express.Router();

// Entry Point: 'http://localhost:3000/products'

// Get All Products
router.get('/', async (req, res) => {
  const filters = req.query;
  const products = await productsService.getAllProducts(filters);
  res.json(products);
});

// Create a new product
router.post('/', async (req, res) => {
  const obj = req.body;
  const id = await productsService.addProduct(obj);
  res.status(201).json(`The ID is: ${id}`);
});

module.exports = router;
