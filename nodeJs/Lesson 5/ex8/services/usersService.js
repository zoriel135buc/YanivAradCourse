const usersWS = require("../repositories/usersWS");
const usersFile = require("../repositories/usersFile");
const usersDB = require("../repositories/usersDB");

const getAllUsers = async () => {
  // data from WS
  const { data: usersWeb } = await usersWS.getAllUsers();

  // data from JSON file
  const { persons: personsFile } = await usersFile.getAllPersons();

  // data from DB
  const addressesDB = await usersDB.getAllUsers();

  const usersData = personsFile.map((per) => {
    const obj = {
      id: per.id,
      phone: per.phone,
    };

    const userWS = usersWeb.find((user) => user.id === obj.id);
    obj.name = userWS.name;
    obj.email = userWS.email;

    const addressDB = addressesDB.find((addr) => addr.externalId === obj.id);
    obj.address = {
      city: addressDB.city,
      country: addressDB.country,
    };

    return obj;
  });

  return usersData;
};

module.exports = { getAllUsers };
