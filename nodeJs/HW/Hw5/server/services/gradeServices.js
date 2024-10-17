const gradeRepositories = require(`../repositories/gradeRepositories`);

const getAllGrades = async () => {
  const Grades = await gradeRepositories.getAllGrades();
  return Grades;
};
const getGradeById = async (id) => {
  const Grade = await gradeRepositories.getGradeById(id);
  return Grade;
};
const getGradesByProfession = async (profession) => {
  const grades = await gradeRepositories.getGradesByProfession(profession);
  return grades;
};
module.exports = { getAllGrades, getGradeById, getGradesByProfession };
