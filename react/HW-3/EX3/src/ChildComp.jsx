import React from "react";

function ChildComp(props) {
  const handleChange = (e) => {};
  return (
    <>
      <h1>ChildComp</h1>
      Name:{" "}
      <input
        onChange={(e) => props.name(e.target.value)}
        type="text"
        style={{ margin: "10px" }}
      ></input>
      <br />
      Age:{" "}
      <input
        onChange={(e) => props.Age(e.target.value)}
        type="number"
        style={{ margin: "10px" }}
      ></input>
      <br />
      city:
      <select
        onChange={(e) => props.City(e.target.value)}
        style={{ margin: "10px" }}
      >
        <option>Haifa</option>
        <option>Tel Aviv</option>
      </select>
      <br />
      is Adult
      <input
        onChange={(e) => props.isAdult(e.target.value)}
        type="checkbox"
        style={{ margin: "10px" }}
      ></input>
      <br />
      <button onChange={handleChange} style={{ margin: "10px" }}>
        Add
      </button>
    </>
  );
}

export default ChildComp;
