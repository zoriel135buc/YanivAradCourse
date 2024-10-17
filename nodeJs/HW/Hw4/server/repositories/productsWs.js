const axios = require(`axios`);

const URL_PRODUCTS = `https://fakestoreapi.com/products`;

const getProducts = () => {
  return axios.get(URL_PRODUCTS);
};
module.exports = { getProducts };
