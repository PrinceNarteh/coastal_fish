const db = require("../persistence/fake-db");

// Resolvers
const resolvers = {
  // Queries are for fetching data from our API
  Query: {
    users: () => db.users,
    user: (_, args) => db.users.find((u) => u.id === args.id),
    uploads: () => {},
  },

  // Mutations are for changing part of your API state
  Mutation: {
    singleUpload: async (_, args) => {
      const file = await args.file();

      return file;
    },
  },

  User: {
    attendance: (user) => db.attendance.filter((a) => a.user === user.id),
  },
  Attendance: {
    user: (at) => db.users.find((u) => u.id === at.user),
  },
};

module.exports = resolvers;
