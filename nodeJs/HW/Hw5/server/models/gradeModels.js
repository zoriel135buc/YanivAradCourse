const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradeSchema = new Schema(
  {
    StudentId: String,
    Profession: String,
    Score: Number,
  },
  { versionKey: false }
);

const Grade = mongoose.model("Grade", GradeSchema, "Grades");
module.exports = { Grade };
