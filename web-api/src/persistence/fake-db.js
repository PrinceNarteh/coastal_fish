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

const attendance = [
  {
    id: "1xxxx",
    clockedInAt: new Date().toDateString(),
    clockedOutAt: new Date().toDateString(),
    user: "1xxxx",
  },
  {
    id: "12xxxx",
    clockedInAt: new Date().toDateString(),
    clockedOutAt: new Date().toDateString(),
    user: "1xxxx",
  },
  {
    id: "4xxxx",
    clockedInAt: new Date().toDateString(),
    clockedOutAt: null,
    user: "2xxxx",
  },
];

module.exports = {
  users,
  attendance,
};
