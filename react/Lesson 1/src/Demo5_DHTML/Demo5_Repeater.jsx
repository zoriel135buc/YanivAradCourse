import { useState } from 'react'



function Demo5_RepeaterComp() {

  const [colors, setColors] = useState(["Red","Green","Blue"]);


  return (
    <>  

    <button onClick={() => setColors([...colors, "Yellow"])   }>Add Color</button>

         <ul>
          {
            colors.map((item,index) =>
            {
               return <li key={index} >{item}</li>
            })
          }
         </ul>
     
    </>
  )
}

export default Demo5_RepeaterComp
