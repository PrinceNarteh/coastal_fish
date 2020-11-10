const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/type-defs");
const resolvers = require("./graphql/resolvers");

// Constants
const PORT = process.env.PORT || 4000;

// Setting Up Server
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// Listen for request
app.listen({ port: PORT }, () => {
  console.log(
    `GraphQL Server ready at http://127.0.0.1:${PORT}${server.graphqlPath}`
  );
});
