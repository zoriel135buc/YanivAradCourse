const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    city: String,
    faculty: String,
  },
  { versionKey: false }
);

const Student = mongoose.model("student", studentSchema, "students");

module.exports = { Student };
