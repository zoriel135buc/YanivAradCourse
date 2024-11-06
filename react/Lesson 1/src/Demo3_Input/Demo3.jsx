import { useState } from 'react'

function Demo3Comp() {

  const sayHello = () =>
  {
    alert("hello");
  }

  const getText = (e) =>
  {
    console.log(e.target.value)
  }

  const getCheck = (e) =>
  {
    console.log(e.target.checked)
  }

  return (
    <>

      <button style={ {color : "red" , backgroundColor : "white"}    } onClick={sayHello}>Say Hello</button> <br/>

      <button onClick={ () => alert("Good bye")}>say Good Bye</button> <br/>


      <input type="text" onChange={ getText } />  <br/>

      <input onChange={getCheck} type="checkbox" />
    </>
  )
}

export default Demo3Comp
