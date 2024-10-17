const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    serialNo: Number,
    name: String,
    price: Number,
  },
  { versionKey: false }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
