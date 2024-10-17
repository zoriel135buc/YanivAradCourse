const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: String,
    color: String,
    price: Number,
  },
  { versionKey: false }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
