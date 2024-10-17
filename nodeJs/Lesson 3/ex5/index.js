const usersService = require('./services/usersService');

const USERNAME = 'Bret';

usersService
  .getUserDataByUsername(USERNAME)
  .then((userData) => console.log(userData))
  .catch((err) => console.error(err));
