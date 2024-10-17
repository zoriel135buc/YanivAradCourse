const jFile = require("jsonfile");

const getPerNameByStreet = (streetName) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let data = await jFile.readFile("./persons.json");
      let pers = data.persons;
      let per = pers.find((x) => x.address.street.name == streetName);

      resolve(per.name);
    }, 2000);
  });
};

module.exports = { getPerNameByStreet };
