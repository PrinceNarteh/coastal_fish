const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name cannot be empty."],
    },
    description: {
      type: String,
      required: [true, "Product description cannot be empty."],
    },
    price: {
      type: Number,
      required: [true, "Product price is required."],
    },
    image: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
