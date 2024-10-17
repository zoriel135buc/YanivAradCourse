const JsFile = require(`jsonfile`);

async function getUserById(id) {
  try {
    const phonesGetData = await JsFile.readFile(`./phones.json`);
    const usersGetData = await JsFile.readFile(`./users.json`);

    const users = usersGetData.users;
    const phones = phonesGetData.phones;

    const finalUser = users.find((user) => user.id === id);

    const phonesUser = phones.find((u) => u.userId === id);
    finalUser.phones = [...phonesUser.phones];
    return finalUser;
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  getUserById,
};
