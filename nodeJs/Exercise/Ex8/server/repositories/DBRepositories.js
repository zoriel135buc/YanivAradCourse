const User = require(`../models/usersModels`);

const getAllUsers = () => {
  return User.find();
};

module.exports = { getAllUsers };
