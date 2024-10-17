const usersRepo = require('../repositories/usersRepo');

const getAllUsers = async () => {
  let { data: users } = await usersRepo.getAllUsers();

  // // Option 1
  // users = users.map((user) => {
  //   return {
  //     id: user.id,
  //     name: user.name,
  //     city: user.address.city,
  //   };
  // });
  // Option 2 - Destructuring
  users = users.map(({ id, name, address }) => {
    return {
      id,
      name,
      city: address.city,
    };
  });

  return users;
};

module.exports = { getAllUsers };
