const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, require: true },
});

const ProductSchema = new Schema({
  name: { type: String, require: true },
  adjective: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  category: { type: String, require: true },
});

module.exports = mongoose.model("Product", ProductSchema);
