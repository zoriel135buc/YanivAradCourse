const utils = require('./utils');

const perObj = { name: 'John', age: 99 };

utils.setPerson(perObj).then((data) => console.log(data));
