const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    externallId: Number,
    city: String,
    country: String,
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
