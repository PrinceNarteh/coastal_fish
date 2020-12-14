const {
  AuthenticationError,
  ForbiddenError,
  ApolloError,
} = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { fileUpload } = require("../../services/utils");

module.exports = {
  addProduct: async (_parent, args, { models, admin }) => {
    // if (!admin) {
    //   throw new ForbiddenError("You don't have permission to perform this operation.");
    // }
    const { image, name } = args;
    const { url } = await fileUpload(image, name);

    try {
      return await models.Product.create({ ...args, image: url });
    } catch (err) {
      throw new ApolloError(err.message);
    }
  },
  updateProduct: async (_parent, args, { models, admin }) => {
    const { id } = args;
    delete args.id;

    if (!admin) {
      throw new AuthenticationError(
        "You don't have permission to perform this operation."
      );
    }

    try {
      return await models.Product.findByIdAndUpdate(id, args, { new: true });
    } catch (err) {
      throw new ApolloError(err.message);
    }
  },

  deleteProduct: async (_parent, { id }, { models, admin }) => {
    if (!admin) {
      throw new AuthenticationError("You don't have permission to update Product");
    }

    try {
      await models.Product.findByIdAndDelet(id);
      return true;
    } catch (err) {
      throw new ApolloError(err.message);
    }
  },

  signUp: async (_parent, { signUpInput }, { models }) => {
    const {
      firstName,
      middleName,
      lastName,
      username,
      email,
      password,
      address,
      phoneNumber,
      role,
    } = signUpInput;

    console.log(email);

    email.trim().toLowerCase();
    const hashedPassword = await bcrypt.hash(password, 12);

    const userExists = await models.User.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      throw new Error("User already exists.");
    }

    try {
      const user = await models.User.create({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        middleName,
        address,
        phoneNumber,
        role,
      });

      return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      throw new Error("Error Creating Account.");
    }
  },
  signIn: async (_parent, { email, username, password }, { models }) => {
    if (email) {
      email = email.trim().toLowerCase();
    }

    const user = await models.User.findOne({ $or: [{ username }, { email }] });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new AuthenticationError("Error signing in.");
    }

    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  },
};
