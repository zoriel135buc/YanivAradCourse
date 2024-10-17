const gradeRepositories = require(`../repositories/gradeRepositories`);
const studentRepositories = require(`../repositories/studentRepositories`);

const getAllStudent = async () => {
  const students = await studentRepositories.getAllStudent();
  return students;
};
const getStudentById = async (id) => {
  const student = await studentRepositories.getStudentById(id);
  return student;
};
const getStudentFaculties = async () => {
  const students = await studentRepositories.getAllStudent();
  const faculties = students.mao((student) => student.faculties);
  return faculties;
};
const getStudentsAndGrades = async () => {
  const students = await studentRepositories.getAllStudent();
  const grades = await gradeRepositories.getAllGrades();
  const studentsAndGrades = students.map((student) => {
    const studentGrades = grades.filter(
      (grade) => grade.StudentId == student.id
    );
    return {
      ...student._doc,
      grades: studentGrades,
    };
  });
  return studentsAndGrades;
};
module.exports = {
  getAllStudent,
  getStudentById,
  getStudentFaculties,
  getStudentsAndGrades,
};
