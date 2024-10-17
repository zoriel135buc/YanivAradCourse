const usersWS = require('../repositories/usersWS');
const todosWs = require('../repositories/todosWs');
const usersFile = require('../repositories/usersFile');

const getUserDataByUsername = async (username) => {
  // User's name and email
  const { data: users } = await usersWS.getUserByUsername(username);
  const user = users[0];

  // User's titles of his first 10 todos
  const { data: todos } = await todosWs.getUserTodos(user.id);
  const titles = todos.map((todos) => todos.title);

  // User's phones
  const data = await usersFile.getUsers();
  const { phones } = data.users.find((user) => user.username === username);

  return {
    name: user.name,
    email: user.email,
    titles,
    phones,
  };
};

module.exports = { getUserDataByUsername };
