import { useState } from 'react'
import Demo1ChildComp from './Demo1Child'



function Demo1ParentComp() {

  return (
    <>
        <h1>Parent Comp</h1>

        <Demo1ChildComp />


        <h1>Parent Footer</h1>
    </>
  )
}

export default Demo1ParentComp
