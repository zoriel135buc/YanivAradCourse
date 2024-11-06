import { useState } from "react";
import Hw1_1 from "./Hw1/Hw1_1/Hw1_1";
import "./App.css";
import Hw2 from "./Hw2/Hw2";
import Product from "./Hw1/Hw1_2/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Product />
    </>
  );
}

export default App;
