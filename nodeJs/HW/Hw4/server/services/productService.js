const jf = require(`jsonfile`);
const FILE = `./data/Orders.json`;
const productsFile = require(`../repositories/productsFile`);
const productsWs = require(`../repositories/productsWs`);

const getProductData = async () => {
  const { data } = await productsWs.getProducts();
  const Prouduct = await productsFile.getProduct();

  // Map through the Orders
  const res = Prouduct.Orders.map((order) => {
    const product = data.find((item) => item.id === order.productId) || {};
    return {
      id: order.productId, // Order's Product ID
      title: product.title || "Unknown Product", // Use product title if found
      Orders: { amount: order.amount, orderData: order.orderData }, // Order details
    };
  });

  // Add products that don't have orders
  data.forEach((product) => {
    const hasOrder = res.find((item) => item.id === product.id);
    if (!hasOrder) {
      const obj = {
        id: product.id,
        title: product.title,
        Orders: {}, // Empty order object if no order exists
      };
      res.push(obj); // Push the product without order to the result array
    }
  });

  // Sort the result array by id
  res.sort((a, b) => a.id - b.id);

  // Write the sorted result to a JSON file
  jf.writeFile(FILE, res, { spaces: 2 }, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data successfully written to file!");
    }
  });

  return res;
};

module.exports = { getProductData };
