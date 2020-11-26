const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/type-defs");
const resolvers = require("./graphql/resolvers");
const models = require("./models");
const { getUser } = require("./services/utils");

// Constants
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Database
require("./services/database");

// Setting Up Server
const app = express();
app.use(express.static("public"));
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    const admin = user && user.role == "admin";
    return {
      admin,
      models,
      user,
    };
  },
});

server.applyMiddleware({ app });

// Listen for request
app.listen({ port: PORT }, () => {
  console.log(`GraphQL Server ready at http://127.0.0.1:${PORT}${server.graphqlPath}`);
});
