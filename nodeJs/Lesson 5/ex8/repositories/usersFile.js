const jf = require('jsonfile');

const FILE = 'data/persons.json';

const getAllPersons = () => {
  return jf.readFile(FILE);
};

module.exports = { getAllPersons };
