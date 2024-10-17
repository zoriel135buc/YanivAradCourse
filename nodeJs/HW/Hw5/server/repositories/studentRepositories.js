const { Student } = require("../models/studentModels");

const getAllStudent = async () => {
  return await Student.find();
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

module.exports = {
  getAllStudent,
  getStudentById,
};
