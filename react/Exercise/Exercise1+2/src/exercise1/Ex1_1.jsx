import { useState } from "react";

function Ex1_1Comp() {
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      Num : <input type="number" onChange={(e) => setNum(+e.target.value)} />{" "}
      <br />
      <button onClick={() => setTotal(total + num)}>Add</button> <br />
      Total : {total}
    </>
  );
}

export default Ex1_1Comp;
