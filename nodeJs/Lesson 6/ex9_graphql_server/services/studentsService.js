/* Static Data */
const students = [
  {
    id: 1,
    name: 'Avi',
    faculty: 'CS',
    grades: [
      { profession: 'Math', score: 90 },
      { profession: 'Statistics', score: 91 },
    ],
  },
  {
    id: 2,
    name: 'Dana',
    faculty: 'Biology',
    grades: [{ profession: 'Physics', score: 85 }],
  },
  {
    id: 3,
    name: 'Gili',
    faculty: 'CS',
    grades: [{ profession: 'Physics', score: 88 }],
  },
];

const getAllStudents = () => {
  return students;
};

const getStudentById = ({ id }) => {
  return students.find((s) => s.id === id);
};

const getStudentsByFaculty = ({ faculty }) => {
  return students.filter((s) => s.faculty === faculty);
};

const getStudentAverage = ({ id }) => {
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

const addStudent = ({ stud }) => {
  students.push({ ...stud, grades: [] });
  return 'Created!';
};

const addGradeToStudent = ({ id, profession, score }) => {
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index].grades.push({ profession, score });
    return 'Grade was added';
  }
  return 'Wrong ID';
};

const updateStudent = ({ stud }) => {
  const index = students.findIndex((s) => s.id === stud.id);
  if (index !== -1) {
    students[index] = { ...students[index], ...stud };
    return 'Updated!';
  }
  return 'Wrong ID';
};

const deleteStudent = ({ id }) => {
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    return 'Deleted!';
  }
  return 'Wrong ID';
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentsByFaculty,
  getStudentAverage,
  addStudent,
  addGradeToStudent,
  updateStudent,
  deleteStudent,
};
