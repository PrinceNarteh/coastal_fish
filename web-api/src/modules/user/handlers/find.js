const UserModel = require("../user-model");

async function find(args) {
  return await UserModel.find(args);
}

module.exports = find;
