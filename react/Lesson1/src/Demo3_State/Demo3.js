import {useState} from 'react'


function Demo3Comp() {

  const [name, setName] = useState("Ron");
  const [age, setAge] = useState(30);

  const [address, setAddress] = useState({city : '', street : ''});

  const [counter, setCounter] = useState(0);

  const changeData = () =>
    {
      setName("Ronit");
      setAge(35);
    }

    const add = () =>
      {
        setCounter(counter+1);

        console.log(counter);
      }

  return (
    <div className="App">

      <button onClick={changeData}>Change Data</button>  <br/>

      <button onClick={add}>+</button>  <br/>
      Counter : {counter}  <br/><br/>
        
       Name : {name} <br/>
       Age : {age}  <br/>

       City : <input onChange={e => setAddress({...address, city : e.target.value}) } type = "text" /> <br/>
       Street : <input onChange={e =>  setAddress({...address, street : e.target.value})   } type = "text" />

      {address.city}
    </div>
  );
}

export default Demo3Comp;
