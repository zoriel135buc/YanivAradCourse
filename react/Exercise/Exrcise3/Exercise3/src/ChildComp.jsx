import { useState } from "react";

import React from "react";

const ChildComp = ({ callBack }) => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    city: "",
    isAdult: false,
  });

  return (
    <div style={{ backgroundColor: "gray" }}>
      <h2>ChildComp</h2>
      name:
      <input
        type="text"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <br></br>
      age:{" "}
      <input
        type="number"
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <br></br>
      city:{" "}
      <select
        defaultValue={""}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      >
        <option value={""} hidden></option>
        <option value={"Haifa"}>Haifa</option>
        <option value={"Tel Aviv"}>Tel Aviv</option>
      </select>
      <br></br>
      is Adult?:{" "}
      <input
        type="checkbox"
        onChange={(e) => setPerson({ ...person, isAdult: e.target.checked })}
      />
      <br></br>
      <button onClick={() => callBack(person)}>Add</button>
    </div>
  );
};

export default ChildComp;
