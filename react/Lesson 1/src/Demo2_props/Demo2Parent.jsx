import { useState } from 'react'
import Demo2ChildComp from './Demo2Child'

function Demo2ParentComp() {

  return (
    <>
       <h2>Parent Comp</h2>

      <Demo2ChildComp name="Ron"  age="20"  />

      <Demo2ChildComp name="Gili"  age="30"  />

       <h2>Parent Footer</h2>
    </>
  )
}

export default Demo2ParentComp
