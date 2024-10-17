const userService = require('./services/userService');

const USER_ID = 2;

userService
  .getUserData(USER_ID)
  .then((userData) => console.log(userData))
  .catch((err) => console.log(err));
