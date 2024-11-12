import { useState } from "react";
import Person from "./Person";

useState;
function Persons() {
  const [persons, setPersons] = useState([
    {
      name: "Avi",
      tasks: [
        { title: "TaskA", completed: true },
        { title: "TaskB", completed: false },
      ],
    },
    {
      name: "Dana",
      tasks: [
        { title: "TaskC", completed: true },
        { title: "TaskD", completed: false },
      ],
    },
  ]);
  return (
    <div style={{ border: "3px solid green", width: "50%" }}>
      <h1>persons List</h1>\
      {persons.map((person, index) => {
        return <Person key={index} PersonData={person} />;
      })}
    </div>
  );
}

export default Persons;
