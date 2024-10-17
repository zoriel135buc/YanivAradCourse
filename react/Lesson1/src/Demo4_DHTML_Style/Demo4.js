import { useState } from "react";

import './Demo4.css'


function Demo4Comp() {

  const [isRed, setIsRed] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">

      <button onClick={() => setIsRed(!isRed) } >change Color</button>

      <h1 style={ {color : isRed ? "red" : "blue" } }>Hello World 1</h1>
       


      <button onClick={() => setIsVisible(!isVisible) } >Show/Hide</button>

      <h1 className={ isVisible ? 'showStyle' : 'hideStyle'} >Hello World 2</h1>


    </div>
  );
}

export default Demo4Comp;
