const users = [
  {
    id: "1xxxx",
    name: "Joseph xxxx",
    email: "j@xx.xxx",
    attendance: [],
    createdAt: new Date().toDateString(),
  },
  {
    id: "2xxxx",
    name: "Rfik xxxx",
    email: "r@xx.xxx",
    attendance: [],
    createdAt: new Date().toDateString(),
  },
];

const UserModel = {
  find: async (query) => users,
};

module.exports = UserModel;
