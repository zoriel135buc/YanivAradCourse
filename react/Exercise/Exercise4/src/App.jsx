import { useState } from "react";
import "./App.css";
import axios from "axios";

const USER_URL = `https://jsonplaceholder.typicode.com/users`;
const TODO_URL = `https://jsonplaceholder.typicode.com/todos`;
function App() {
  const [UserId, setUserId] = useState({});
  const [todosTitles, setTodosTitles] = useState([]);

  const HandleChange = async () => {
    const { data: UserData } = await axios.get(`${USER_URL}/${UserId}`);
    setUserId({ name: UserData.name, email: UserData.email });
    if (UserData.name.startsWith("E")) {
      const { data: UserTodos } = await axios.get(
        `${TODO_URL}?userId=${UserId}`
      );
      const titles = UserTodos.map((todo) => todo.title);
      setTodosTitles(titles);
    } else {
      setTodosTitles([]);
    }
  };
  return (
    <>
      <h1>Exercise 4</h1>
      UserId:{" "}
      <input type="number" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={(e) => HandleChange(e.target.value)}>press</button>
      <h1>name: {UserId.name}</h1>
      <h1>email: {UserId.email}</h1>
      <ul>
        {todosTitles.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
