const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/productsDB')
    .then(() => console.log('Connected to productsDB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
