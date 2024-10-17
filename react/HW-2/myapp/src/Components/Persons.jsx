import React, { useState } from "react";
import Person from "./Person";
import Task from "./Task";

export default function Persons() {
  const [persons, setPersons] = useState([{ name: "Avi" }, { name: "Dana" }]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Persons Lists:</h1>
      {persons.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "500px",
              border: "solid 1px red",
              margin: "30px 0",
            }}
          >
            <h1>{item.name}</h1>

            <Person />
            <Task />
          </div>
        );
      })}
    </div>
  );
}
