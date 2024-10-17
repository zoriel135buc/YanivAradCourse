const express = require('express');
const cors = require('cors');

// mount a GraphQL API server on the '/graphql' HTTP endpoint
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const studentsService = require('./services/studentsService');

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Grade {
      profession: String
      score: Int
    }

    input GradeInput {
      profession: String
      score: Int
    }

    type Student {
      id: Int
      name: String
      faculty: String
      grades: [Grade]
    }

    input StudentInput {
      id: Int
      name: String
      faculty: String
      grades: [GradeInput]
    }

    type Query {
      getAllStudents: [Student]
      getStudentById(id: Int): Student
      getStudentsByFaculty(faculty: String): [Student]
      getStudentAverage(id: Int): Float
    }

    type Mutation {
      addStudent(stud: StudentInput): String
      addGradeToStudent(id: Int, profession: String, score: Int): String
      updateStudent(stud: StudentInput): String
      deleteStudent(id: Int): String
    }
  `);

// The 'root' provides a resolver function for each API endpoint
const root = {
  getAllStudents: studentsService.getAllStudents,
  getStudentById: studentsService.getStudentById,
  getStudentsByFaculty: studentsService.getStudentsByFaculty,
  getStudentAverage: studentsService.getStudentAverage,
  addStudent: studentsService.addStudent,
  addGradeToStudent: studentsService.addGradeToStudent,
  updateStudent: studentsService.updateStudent,
  deleteStudent: studentsService.deleteStudent,
};

const app = express();
const PORT = 4000;

app.use(cors());

app.use(
  '/persons',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}/persons`);
});
