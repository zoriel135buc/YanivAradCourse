const usersService = require(`./services/usersService`);

const USER_NAME = `Antonette`;

usersService
  .getUserData(USER_NAME)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
