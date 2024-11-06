import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo1ParentComp from './Demo1_ComponentsHierechy/Demo1Parent'
import Demo2ParentComp from './Demo2_props/Demo2Parent'
import Demo3Comp from './Demo3_Input/Demo3'
import Demo4Comp from './Demo4_state/Demo4'
import Ex1_1Comp from './Ex1_1/Ex1_1'
import Demo5_ChangeStyleComp from './Demo5_DHTML/Demo5_ChangeStyle'
import Demo5_CreateDeleteComp from './Demo5_DHTML/Demo5_CreateDelete'
import Demo5_RepeaterComp from './Demo5_DHTML/Demo5_Repeater'
import Ex2_1Comp from './Ex2_1/Ex2_1'
import Demo6ProductsComp from './Demo6_DynamicChildRender/Demo6Products'

function App() {

  return (
    <>
       <Demo6ProductsComp />
     
    </>
  )
}

export default App
