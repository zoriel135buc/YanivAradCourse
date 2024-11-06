import { useState } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const App = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState({});
  const [todosTitles, setTodosTitles] = useState([]);

  const getUser = async () => {
    const { data: userData } = await axios.get(`${USERS_URL}/${id}`);
    setUser({ name: userData.name, email: userData.email });

    if (userData.name.startsWith('E')) {
      const { data: userTodos } = await axios.get(`${TODOS_URL}?userId=${id}`);
      const titles = userTodos.map((todo) => todo.title);
      setTodosTitles(titles);
    } else {
      setTodosTitles([]);
    }
  };

  return (
    <>
      User ID: <input type='number' onChange={(e) => setId(e.target.value)} />
      <button onClick={getUser}>Get User</button>
      <br /> <br />
      Name: {user.name} <br />
      Email: {user.email} <br />
      <br />
      <ul>
        {todosTitles.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
