const Product = require('../models/productModel');

// Get All
const getAllProducts = (filters) => {
  return Product.find(filters);
};

// Create
const addProduct = (obj) => {
  const prod = new Product(obj);
  return prod.save();
};

module.exports = {
  getAllProducts,
  addProduct,
};
