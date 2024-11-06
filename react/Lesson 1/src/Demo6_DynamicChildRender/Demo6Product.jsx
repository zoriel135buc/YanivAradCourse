import { useState } from 'react'

function Demo6ProductComp(props) {

  return (
    <>
    <div>
    <div style={{width : "400px", border : "solid 1px blue"}}>

      <h3>Product Data</h3>

      Name : {props.prodData.name} <br/>
      Price : {props.prodData.price} <br/>

    </div>
    <br/>
    </div>
    </>
  )
}

export default Demo6ProductComp
