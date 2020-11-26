const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type File {
    url: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    preference: String!
    image: File!
    inStock: Boolean
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    username: String!
    address: String!
    phoneNumber: String!
    role: String!
  }

  type Cart {
    id: ID!
    items: [Product!]!
    totalPrice: Int!
    user: User
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    username: String!
    address: String!
    phoneNumber: String!
    password: String!
    role: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID): Product
  }

  type Mutation {
    addProduct(
      name: String!
      description: String!
      price: Int!
      image: Upload!
      inStock: Boolean
    ): Product!
    updateProduct(
      id: ID!
      name: String
      description: String
      price: Int
      preference: String
      image: Upload
      inStock: Boolean
    ): Product!
    deleteProduct(id: ID!): Boolean
    signUp(signUpInput: SignUpInput): String!
    signIn(username: String, email: String, password: String!): String!
    addToCart(cartId: ID!, productId: ID!): Cart!
  }
`;

module.exports = typeDefs;
