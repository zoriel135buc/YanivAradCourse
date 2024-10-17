const { Grade } = require(`../models/gradeModels`);

const getAllGrades = async () => {
  return await Grade.find();
};
const getGradeById = async (id) => {
  return await Grade.findById(id);
};
const getGradesByProfession = async (profession) => {
  return await Grade.find({ profession: profession });
};

module.exports = { getAllGrades, getGradeById, getGradesByProfession };
