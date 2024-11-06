import { useState } from 'react'

import './Demo5.css'

function Demo5_ChangeStyleComp() {

  const [isRed, setIsRed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  return (
    <>  
    <button onClick={() => setIsRed(!isRed)}>Change Color</button>
       
       <h1 style={ { color : isRed ? "red" : "blue" }   }>Hello World</h1>  <br/>

       <button onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>

       <h1 className= {isVisible ? "showElelent" : "hideElement"} >Hello World 2</h1>
     
    </>
  )
}

export default Demo5_ChangeStyleComp
