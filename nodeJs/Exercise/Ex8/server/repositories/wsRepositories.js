const axios = require(`axios`);

const URL_USERS = `https://jsonplaceholder.typicode.com/users`;

const getAllUsers = () => {
  return axios.get(URL_USERS);
};
module.exports = { getAllUsers };
