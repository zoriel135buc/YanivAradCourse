import { useState } from 'react';
import axios from 'axios';

const PERSONS_URL = 'http://localhost:3000/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({});

  const getAllPersons = async () => {
    const { data } = await axios.get(PERSONS_URL);
    setPersons(data);
  };

  const getPerson = async () => {
    const { data } = await axios.get(`${PERSONS_URL}/66aa67b4e50bfd5b57e7fa36`);
    setPerson(data);
  };

  const addPerson = async () => {
    const newPer = { name: 'Johnny', age: 99, city: 'Tel Aviv' };
    const { data } = await axios.post(PERSONS_URL, newPer);
    console.log(data);
  };

  const updatePerson = async () => {
    const perToUpdate = { age: 27 };
    const { data } = await axios.put(
      `${PERSONS_URL}/66d0bc3cf1fb733a7a3cea1c`,
      perToUpdate
    );
    console.log(data);
  };

  const deletePerson = async () => {
    const { data } = await axios.delete(
      `${PERSONS_URL}/670a8a5857c22941a112a40b`
    );
    console.log(data);
  };

  return (
    <>
      {/* Get All */}
      <button onClick={getAllPersons}>Get All</button>
      <ul>
        {persons.map((per) => {
          return (
            <li key={per._id}>
              {per.name} {per.age}
            </li>
          );
        })}
      </ul>
      {/* Get By ID */}
      <button onClick={getPerson}>Get Person</button>
      <br />
      Name: {person.name} <br />
      Age: {person.age} <br />
      City: {person.city} <br />
      <br /> <br />
      {/* Post */}
      <button onClick={addPerson}>Add</button>
      {/* Put */}
      <button onClick={updatePerson}>Update</button>
      {/* Delete */}
      <button onClick={deletePerson}>Delete</button>
    </>
  );
};

export default App;
