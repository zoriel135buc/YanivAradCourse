const productService = require(`./services/productService`);

productService
  .getProductData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
