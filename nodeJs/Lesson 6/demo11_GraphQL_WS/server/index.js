const express = require("express");
const cors = require("cors");

// mount a GraphQL API server on the '/persons' HTTP endpoint
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const personsService = require("./services/personsService");

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
    input PersonInput {
      id: Int
      name: String
     faculty:String
     
    }

    type Person {
      id: Int
      name: String
      age: Int
    }

    type Query {
      allPersons: [Person]
      getPerson(id: Int): Person
      getPersonsOlderThan(age: Int): [Person]
    }

    type Mutation {
      addPerson(per: PersonInput): String
      updatePerson(per: PersonInput): String
      deletePerson(id: Int): String
    }
  `);

// The 'root' provides a resolver function for each API endpoint
const root = {
  allPersons: personsService.getAllPersons,
  getPerson: personsService.getPersonById,
  getPersonsOlderThan: personsService.getPersonsByAge,
  addPerson: personsService.addPerson,
  updatePerson: personsService.updatePerson,
  deletePerson: personsService.deletePerson,
};

const app = express();
const PORT = 4000;

app.use(cors());

app.use(
  "/persons",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
