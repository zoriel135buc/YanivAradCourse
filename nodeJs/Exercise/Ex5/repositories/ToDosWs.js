const axios = require("axios");

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodo = (id, limit = 10) => {
  return axios.get(`${TODO_URL}/?id=${id}&_limit=${limit}`);
};
module.exports = { getTodo };
