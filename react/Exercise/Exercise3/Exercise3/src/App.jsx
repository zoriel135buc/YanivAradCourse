import { useState } from "react";
import ChildComp from "./ChildComp";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);

  const addPerson = (per) => {
    setPersons([...persons, per]);
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Parent Components</h1>
      <ul>
        {persons.map((per, index) => {
          return (
            <li key={index}>
              {per.name} is {per.age} years old , lives in {per.city} and s.HE
              is {per.isAdult ? "an" : "not an"} adult
            </li>
          );
        })}
      </ul>
      <ChildComp callBack={addPerson} />
    </div>
  );
}

export default App;
