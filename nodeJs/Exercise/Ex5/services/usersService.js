const usersWs = require(`../repositories/usersWs`);
const ToDosWs = require(`../repositories/todosWs`);
const usersFile = require(`../repositories/usersFile`);

const getUserData = async (userName) => {
  const data = await usersFile.getUsers();
  const { phones } = data.users.find((user) => user.username === userName);

  const { data: users } = await usersWs.getUserName(userName);
  const user = users[0];

  const { data: todos } = await ToDosWs.getTodo(user.id);
  const titles = todos.map((todos) => todos.title);

  return {
    titles,
    name: user.name,
    email: user.email,
    phones,
  };
};
module.exports = { getUserData };
