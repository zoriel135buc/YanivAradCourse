import { useState } from "react";
function Ex2_1comp() {
  const [Persons, setPersons] = useState([
    { name: "Ron", age: 20, city: "TelAviv" },
    { name: "Dana", age: 30, city: "Eilet" },
    { name: "Gil", age: 40, city: "Ashdod" },
  ]);
  const [New, setNew] = useState({ name: "", age: "", city: "" });
  const addNewPerson = (e) => {
    e.preventDefault();
    setPersons([...Persons, { ...New }]);
    setNew({ name: "", age: "", city: "" }); // Clear the form
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNew((prevNew) => ({
      ...prevNew,
      [name]: value,
    }));
  };
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
          </tr>
        </tbody>

        <tbody>
          {Persons.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul>
        {Persons.map((item, index) => {
          return (
            <li key={index}>
              {item.name}
              <ul>
                <li>{item.age}</li>
                <li>{item.city}</li>
              </ul>
            </li>
          );
        })}
      </ul>

      <form onSubmit={addNewPerson}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={New.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={New.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={New.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default Ex2_1comp;
