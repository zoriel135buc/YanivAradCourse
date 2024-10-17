const productsRepo = require('../repositories/productsRepo');

const getAllProducts = async (filters) => {
  return productsRepo.getAllProducts(filters);
};

const addProduct = async (obj) => {
  const newPer = await productsRepo.addProduct(obj);
  return newPer._id;
};

module.exports = {
  getAllProducts,
  addProduct,
};
