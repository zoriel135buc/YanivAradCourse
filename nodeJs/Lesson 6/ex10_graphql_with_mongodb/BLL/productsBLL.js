const Product = require('../models/productModel');

const getAllProducts = () => {
  return Product.find({});
};

const getProductById = ({ id }) => {
  return Product.findById(id);
};

const addProduct = async ({ prod }) => {
  const prod = new Product(prod);
  await prod.save();
  return 'Created!';
};

const updateProduct = async ({ id, prod }) => {
  await Product.findByIdAndUpdate(id, prod);
  return 'Updated!';
};

const deleteProduct = async ({ id }) => {
  await Product.findByIdAndDelete(id);
  return 'Deleted!';
};

const getProductsExpensiveThan = ({ price }) => {
  return Product.find({ price: { $gt: price } });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsExpensiveThan,
};
