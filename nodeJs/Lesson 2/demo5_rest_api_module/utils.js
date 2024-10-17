const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () => {
  return axios.get(USERS_URL);
};

const getUsersEmails = async () => {
  const { data: users } = await getAllUsers();
  const emails = users.map((user) => user.email);
  return emails;
};

module.exports = { getAllUsers, getUsersEmails };
