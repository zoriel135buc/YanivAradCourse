const jf = require(`jsonfile`);

const FILE = `./data/Orders.json`;

const getProduct = () => {
  return jf.readFile(FILE);
};
module.exports = { getProduct };
