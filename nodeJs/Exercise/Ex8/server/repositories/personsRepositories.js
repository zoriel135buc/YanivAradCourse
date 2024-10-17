const jf = require(`jsonfile`);
const FILE = `data/persons.json`;
const getAllPerson = () => {
  return jf.readFile(FILE);
};

module.exports = { getAllPerson };
