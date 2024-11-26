import React from "react";
import { getUserFullData } from "../Hw4_2/utils";
import { useState } from "react";
import User from "./User";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  const fetchUsers = async () => {
    const { data } = await getUserFullData();
    setUsersData(data);
    console.log(data);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <strong>Users</strong> <button onClick={fetchUsers}>get Data</button>
      {usersData.map((user) => {
        return <User key={user.id} usersData={user} />;
      })}
    </div>
  );
};

export default Users;
