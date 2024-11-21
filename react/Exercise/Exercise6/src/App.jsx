import { useState } from "react";
import "./App.css";
import ChildComp from "./ChildComp";

function App() {
  const [userId, setUserId] = useState(0);
  return (
    <>
      <h1>Exercise6</h1>
      UserId:
      <input type="number" onChange={(e) => setUserId(e.target.value)} />
      <ChildComp userId={userId} />
    </>
  );
}

export default App;
