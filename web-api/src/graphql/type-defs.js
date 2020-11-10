const { gql } = require("apollo-server-express");

// Type Definition
const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    attendance: [Attendance]
    createdAt: String
  }

  type Attendance {
    id: ID
    clockedInAt: String
    clockedOutAt: String
    user: User
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    users(take: Int, skip: Int, inTitle: String): [User]
    user(id: ID): User
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

module.exports = typeDefs;
