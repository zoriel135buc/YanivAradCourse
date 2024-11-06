import { useState } from 'react'
import Demo6ProductComp from './Demo6Product'

function Demo6ProductsComp() {

  const [prods, setProds] = useState([{name : "Watch", price : 100} , {name : "TV", price : 50}])

  return (
    <>
    <div style={{width : "500px", border : "solid 1px red"}}>

      <h3>Products</h3>

    {
      prods.map((item,index) =>
      {
        return <Demo6ProductComp prodData={item} key={index} />
      })
    }
      

    </div>
    
     
    </>
  )
}

export default Demo6ProductsComp
