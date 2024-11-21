import React from "react";

function Ex2_1Child({ setPersons }) {
  const [newPerson, setNewPerson] = useState({});
  return (
    <div>
      name Person:
      <input
        type="text"
        onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
      />
      <br />
      age Person :{" "}
      <input
        type="number"
        onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
      />
      city Person:{" "}
      <input
        type="text"
        onChange={(e) => setNewPerson({ ...newPerson, city: e.target.value })}
      />
      <button onClick={(e) => setPersons({ newPerson })}>add Person</button>
    </div>
  );
}

export default Ex2_1Child;
