import React from "react";
import { get3TopTasks } from "./utils";
import Tasks from "./Tasks";
import { useState } from "react";

const User = (props) => {
  const [Todos, setTodos] = useState([]);
  const [isExist, setIsExist] = useState(false);

  const fetchTodos = async () => {
    const { data } = await get3TopTasks(props.usersData.id);
    setTodos(data.splice(0, 3));
    setIsExist(true);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <strong>user</strong>
      User Id: {props.usersData.id}
      <br />
      Name:{props.usersData.name}
      <br />
      Email: {props.usersData.email}
      <br />
      <button onClick={() => fetchTodos()}>tasks</button>
      {isExist ? <Tasks todos={Todos} /> : null}
    </div>
  );
};

export default User;
