import { useState } from "react";

function Ex1Comp() {

  const [num, setNum] = useState(0)
  const [total, setTotal] = useState(0)
  return (
    <div className="App">
        
        Enter num : <input type="text" onChange={e => setNum(+e.target.value)} /> <br/>

        <button onClick={ () => setTotal(total+num)} >Add</button>  <br/>

        Total : {total}
   

    </div>
  );
}

export default Ex1Comp;
