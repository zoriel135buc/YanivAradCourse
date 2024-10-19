const students = [
  {
    id: 1,
    name: "Avi",
    faculty: "CS",
    grades: [
      { profession: "Math", score: 90 },
      { profession: "Statistics", score: 91 },
    ],
  },
  {
    id: 2,
    name: "Dana",
    faculty: "Biology",
    grades: [{ profession: "Physics", score: 85 }],
  },
  {
    id: 3,
    name: "Gili",
    faculty: "CS",
    grades: [{ profession: "Physics", score: 88 }],
  },
];
const getAllStudents = () => {
  return students;
};
const getStudentById = (args) => {
  const { id } = args;
  return students.find((student) => student.id === id);
};
const getAllStudentsByFaculty = (args) => {
  const { faculty } = args;
  return students.filter((s) => s.faculty === faculty);
};
const getStudentByAvg = (args) => {
  const stud = getStudentById({ id });
  if (stud.grades.length) {
    const sum = stud.grades.reduce(
      (scoresAcc, grade) => scoresAcc + grade.score,
      0
    );
    const len = stud.grades.length;
    return sum / len;
  } else {
    return 0;
  }
};

const addStudent = (args) => {
  const { stud } = args;
  students.push(stud);
  return "Created";
};
const addGradeToStudent = ({ id, profession, score }) => {
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index].grades.push({ profession, score });
    return `Grade was added`;
  }
  return `wrong Id`;
};
const updateStudent = (args) => {
  const { stud } = args;
  const index = students.findIndex((s) => s.id === stud.id);
  if (index !== -1) {
    students[index] = { ...students[index], ...stud };
    return "Updated!";
  }
  return `wrong Id`;
};
const deleteStudent = (args) => {
  const { id } = args;
  const index = students.findIndex((stud) => stud.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    return `deleted`;
  }
  return "Wrong ID";
};
module.exports = {
  getAllStudents,
  getStudentById,
  getAllStudentsByFaculty,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentByAvg,
  addGradeToStudent,
};
