const axios = require(`axios`);

const URL_USERS = `https://jsonplaceholder.typicode.com/users`;

const getUserName = (userName) => {
  return axios.get(`${URL_USERS}?username=${userName}`);
};
module.exports = { getUserName };
