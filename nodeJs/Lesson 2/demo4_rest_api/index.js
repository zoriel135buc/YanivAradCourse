const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAll = async () => {
  // // Option 1
  // const resp = await axios.get(USERS_URL);
  // console.log(resp.data);
  // Option 2 - Destructuring
  const { data } = await axios.get(USERS_URL);
  console.log(data);
};

const getById = async (id) => {
  const { data: user } = await axios.get(`${USERS_URL}/${id}`);
  console.log(user);
};

const addUser = async (obj) => {
  const { data } = await axios.post(USERS_URL, obj);
  console.log(data);
};

const updateUser = async (id, obj) => {
  const { data } = await axios.put(`${USERS_URL}/${id}`, obj);
  // const { data } = await axios.patch(`${USERS_URL}/${id}`, obj);
  console.log(data);
};

const deleteUser = async (id) => {
  const { data } = await axios.delete(`${USERS_URL}/${id}`);
  console.log(data);
};

getAll();
getById(3);
addUser({ name: 'John', age: 99 });
updateUser(5, { name: 'Dana', age: 43 });
deleteUser(4);
