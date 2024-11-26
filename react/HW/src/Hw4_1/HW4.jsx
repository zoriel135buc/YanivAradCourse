import React from "react";
import { getUserFullData } from "./utils";
import { useState } from "react";

function HW4() {
  const [user, setUser] = useState({});

  const getUser = async (id) => {
    const data = await getUserFullData(id);
    console.log(data);
    setUser(data);
  };
  return (
    <div>
      UserID: <input type="text" onChange={(e) => getUser(e.target.value)} />
      <br />
      <h3>User Data:</h3>
      name: {user.name} <br />
      email: {user.email} <br />
      <h3>Todos:</h3>
      <ul>
        {user.todos &&
          user.todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <h3>Posts:</h3>
      <ul>{user.posts}</ul>
    </div>
  );
}

export default HW4;
