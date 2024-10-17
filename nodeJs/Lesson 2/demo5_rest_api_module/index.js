const utils = require('./utils');

utils
  .getAllUsers()
  .then((resp) => {
    console.log('1:', resp.data);
  })
  .catch((err) => {
    console.log('2:', err);
  });

// utils.getUsersEmails().then((emails) => console.log(emails));
