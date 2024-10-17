import { useState } from "react";
import CompB from "./CompB";
import CompC from "./CompC";

function Comp1() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        backgroundColor: "red",
        width: "100vw",
        height: "100vh",
        textAlign: "left",
      }}
    >
      <h1>Comp A</h1>
      <input on onChange={(e) => setText(e.target.value)}></input>
      <CompB text={text} />
    </div>
  );
}

export default Comp1;
