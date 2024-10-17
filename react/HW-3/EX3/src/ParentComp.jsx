import React from "react";
import ChildComp from "./ChildComp";
import { useState } from "react";

export default function ParentComp() {
  const [Name, setName] = useState(``);
  const [Age, setAge] = useState();
  const [City, setCity] = useState(``);
  const [isAdult, setIsAdoult] = useState(false);
  const getDataFromChild = (childValue) => {
    setName(childValue);
    setAge(childValue);
    setCity(childValue);
    setIsAdoult(childValue);
  };

  return (
    <div>
      <h1>ParentComp</h1>
      {Name} is {Age} years old,Lives in {City} and He is{" "}
      {!isAdult ? "an Adoult" : "not an adoult"}
      <ChildComp
        name={setName}
        Age={setAge}
        City={setCity}
        isAdult={setIsAdoult}
      />
    </div>
  );
}
