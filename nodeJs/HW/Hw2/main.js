const utils = require(`./utils.js`);

utils.getUserById(1).then((data) => console.log(data));

// async function aux_func() {
//   const result = await utils.getUserById(1);
//   console.log(result);
// }
