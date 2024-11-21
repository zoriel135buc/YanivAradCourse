import { useEffect, useState } from "react";
import axios from "axios";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function ChildComp({ userId }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${TODOS_URL}?userId=${userId}&_limit=5`
      );
      setTodos(data);
    };
    fetchData();
  }, [userId]);
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}
export default ChildComp;
