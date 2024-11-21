import { useState } from "react";
import axios from "axios";
import "./App.css";
const USER_URL = `https://jsonplaceholder.typicode.com/users`;
function App() {
  const [UserId, setUserId] = useState("");
  const [UserData, setUserData] = useState({});
  const [updateData, setUpdateData] = useState({});

  const getUser = async () => {
    const { data: getData } = await axios.get(`${USER_URL}/${UserId}`);
    setUserData({ name: getData.name, email: getData.email });
  };

  const updateUser = async () => {
    const { data: pushUser } = await axios.put(
      `${USER_URL}/${UserId}`,
      updateData
    );
    console.log("Updated User Data:", pushUser);
    setUpdateData({ name: pushUser.name, email: pushUser.email });
  };
  return (
    <>
      UserId:{" "}
      <input type="number" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={getUser}>Get Data</button>
      <h3>name:{UserData.name} </h3>
      <h3>email:{UserData.email} </h3>
      name:{" "}
      <input
        type="text"
        onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
      />
      <br />
      email:{" "}
      <input
        type="text"
        onChange={(e) =>
          setUpdateData({ ...updateData, email: e.target.value })
        }
      />
      <br />
      <button onClick={updateUser}>updateData</button>
    </>
  );
}

export default App;
