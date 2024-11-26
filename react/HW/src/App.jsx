import { useState } from "react";
import Parent from "./Hw3/Parent";
import HW4 from "./Hw4_1/HW4";
import Users from "./Hw4_2/Users";
import "./App.css";
import Hw2 from "./Hw2/Hw2";
import Hw5 from "./Hw5/Hw5";
import MoviesParent from "./Hw6_1/MoviesParent";
import Users_Ex6 from "./Hw6_2/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Users_Ex6 />
    </>
  );
}

export default App;
