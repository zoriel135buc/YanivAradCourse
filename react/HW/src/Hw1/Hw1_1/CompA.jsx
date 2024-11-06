import { useState } from "react";
import CompB from "./CompB";
function CompA() {
  const [input, setInput] = useState("");
  return (
    <div style={{ backgroundColor: "red", height: "1000px", width: "1000px" }}>
      <h1>CompA</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <CompB userInput={input} />
    </div>
  );
}
export default CompA;
