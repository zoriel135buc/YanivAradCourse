import { useState } from 'react'

function Ex2_1Comp() {

  const [persons, setPersons] = useState([{name : "Ron", age : 20, city : "TelAviv"},
                                          {name : "Dana", age : 30, city : "Eilet"},
                                          {name : "Gil", age : 40, city : "Ashdod"}
                                        ])

  return (
    <>
      <table border={1}>
        <tr><th>name</th><th>age</th><th>city</th></tr>

        <tbody>

        {
          persons.map((item,index) =>
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
          })
        }
      </ul>
     
    </>
  )
}

export default Ex2_1Comp
