import { useState } from "react";
import Parent from "./Hw3/Parent";
import HW4 from "./Hw4/HW4";

import "./App.css";
import Hw2 from "./Hw2/Hw2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Parent /> */}
      <HW4 />
    </>
  );
}

export default App;
