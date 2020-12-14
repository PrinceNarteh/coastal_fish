const { ApolloError } = require("apollo-server-express");

module.exports = {
  products: async (_parent, _args, { models }) => {
    try {
      return await models.Product.find({});
    } catch (err) {
      throw new ApolloError(err.message);
    }
  },
  product: async (_parent, { id }, { models }) => {
    try {
      return await models.Product.findById(id);
    } catch (error) {
      throw new ApolloError(err.message);
    }
  },
};
