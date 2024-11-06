import { useState } from 'react'

import './Demo5.css'

function Demo5_CreateDeleteComp() {

  const [isExist, setIsExist] = useState(false);


  return (
    <>  
    <button onClick={() => setIsExist(!isExist)}>Create/Delete</button>
       
       {
          isExist &&   <h1>Hello World</h1> 
       }

       {
          isExist? <h1>Hello World</h1> : null 
       }
     

      
     
    </>
  )
}

export default Demo5_CreateDeleteComp
