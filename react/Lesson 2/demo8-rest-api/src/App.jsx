import { useState } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const getAllUsers = async () => {
    const resp = await axios.get(USERS_URL);
    console.log(resp);
    setUsers(resp.data);
  };

  const getById = async () => {
    const { data } = await axios.get(`${USERS_URL}/5`);
    setUser(data);
  };

  const addUser = async () => {
    const obj = { name: 'Avi', age: 30 };
    const { data } = await axios.post(USERS_URL, obj);
    console.log(data);
  };

  const updateUser = async () => {
    const obj = { name: 'Dana', age: 20 };
    const { data } = await axios.put(`${USERS_URL}/4`, obj);
    // const { data } = await axios.patch(`${USERS_URL}/4`, obj);
    console.log(data);
  };

  const deleteUser = async () => {
    const { data } = await axios.delete(`${USERS_URL}/7`);
    console.log(data);
  };

  return (
    <>
      <button onClick={getAllUsers}>Get All Users</button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <br />
      <button onClick={getById}>Get User</button>
      <br />
      Name: {user.name} <br />
      Username: {user.username} <br />
      <br /> <br />
      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
};

export default App;
