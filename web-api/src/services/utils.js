const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const { ApolloError } = require("apollo-server-express");

const sanitizeName = (name) => {
  return name.replace(/\s+/g, " ").trim().toLowerCase().split(" ").join("-");
};

module.exports = {
  fileUpload: async (file, productName) => {
    const { createReadStream, filename } = await file;
    const { ext } = path.parse(filename);
    const sanitizedProductName = sanitizeName(productName) + ext;
    const pathName = path.join(
      __dirname,
      "..",
      "..",
      `public/images/products/${sanitizedProductName}`
    );

    const stream = createReadStream();
    await stream.pipe(fs.createWriteStream(pathName));
    return {
      url: `http://localhost:4000/images/products/${sanitizedProductName}`,
    };
  },
  getUser: (token) => {
    if (token) {
      try {
        return jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        throw new ApolloError("Invalid Session.");
      }
    }
  },
};
