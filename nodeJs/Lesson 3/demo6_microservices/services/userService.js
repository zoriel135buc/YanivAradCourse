const usersFile = require('../repositories/usersFile');
const usersWS = require('../repositories/usersWS');

const getUserData = async (id) => {
  // Data from file
  const users = await usersFile.getUsers();
  const user = users.find((user) => user.id === id);

  // Data from Web Service
  const { data } = await usersWS.getUserById(id);

  return {
    id,
    name: user.name,
    email: data.email,
  };
};

module.exports = { getUserData };
