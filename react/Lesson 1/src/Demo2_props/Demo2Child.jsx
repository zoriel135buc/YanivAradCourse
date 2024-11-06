import { useState } from 'react'

function Demo2ChildComp(props) {

  return (
    <>
       <h3>Child Comp - Personal Data</h3>

        Name : {props.name} <br/>
        Age : {props.age}


       <h3>Child Footer</h3>
    </>
  )
}

export default Demo2ChildComp
