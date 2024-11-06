import { useState } from 'react'

function Demo4Comp() {


 const [counter, setCounter] = useState(1)

  const [name, setName] = useState("Ron")
  const [age, setAge] = useState(20)

  const [city, setCity] = useState("")

  const [prod, setProd] = useState({name : "Tablet", price: 200})

  const changeData = () =>
  {
    setName("Roni");
    setAge(25);
  }

  const changeProdData = () =>
  {
    setProd({name : "PC" , price : 100})
  }

  const changeProdPrice = () =>
  {
    setProd({...prod , price : 250})
  }

  const increment = () =>
  {
     setCounter(counter+1);

    console.log(counter);
  }

  return (
    <>

    <button onClick={increment}> + </button>  <br/>

Counter : {counter}    <br/><br/>


<button onClick={changeProdData}>Change Prod data</button>  <br/> <br/>
<button onClick={changeProdPrice}>Change Price only</button>  <br/> <br/>


    <button onClick={changeData}>Change Data</button>  <br/> <br/>

       Name : {name} <br/>
       Age : {age} <br/>

       City  : <input type="text" onChange={e =>  setCity(e.target.value)  } />
       <br/>
       {city}
     
    </>
  )
}

export default Demo4Comp
