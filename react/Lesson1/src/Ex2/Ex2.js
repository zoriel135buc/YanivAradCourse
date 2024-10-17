import { useState } from "react";


function Ex2Comp() {


  const [person, setPerson] = useState({name : '', age : 0, city:''})

 const [persons, setPersons] = useState([{name : "Ron", age : 20, city : "Haifa"},
                                        {name : "Dana", age : 30, city : "Tel Aviv"},
                                        {name : "Gil", age : 40, city : "Jerusalem"}])

  return (
    <div >

      Name : <input type="text" onChange={e => setPerson({...person, name: e.target.value}) } /> <br/>
      Age : <input type="text" onChange={e => setPerson({...person, age: e.target.value}) } /> <br/>
      City : <input type="text" onChange={e => setPerson({...person, city: e.target.value}) } /> <br/>

      <button onClick={() =>  setPersons([...persons, person])  }>Add</button>  <br/>

        
        <table border={1}>
          <tr><th>Name</th><th>Age</th><th>City</th></tr>
          <tbody>
          {
            persons.map((item, index) =>
            {
              return <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
              </tr>
            })
          }

          </tbody>
        </table>


        <ul>
          {
            persons.map((item,index) =>
              {
                return <li key={index}>
                            {item.name}
                            <ul>
                                <li>{item.age}</li>
                                <li>{item.city}</li>
                            </ul>
                     </li>
              }
            )
          }
        </ul>
     

    </div>
  );
}

export default Ex2Comp;
