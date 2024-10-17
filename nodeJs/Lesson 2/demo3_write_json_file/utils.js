const jf = require('jsonfile');

const FILE = './data/persons.json';

const setPerson = async (perObj) => {
  const data = await jf.readFile(FILE);
  data.persons.push(perObj);
  await jf.writeFile(FILE, data);
  return 'Added Successfully';
};

module.exports = { setPerson };
