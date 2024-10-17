import { useState } from "react";

function Demo6Comp() {

  const [colors, setColors] = useState(["Red","Green","Blue"])

  const [products, setProducts] = useState([{name : "PC" , price : 1000},
                                            {name : "Tablet" , price : 700}])


  const addColor = () =>
    {
      //Option 1 - bad practice
      /*
        let arr = colors;
        arr.push("Yellow");

        setColors(arr);
        */

        setColors([...colors, "Yellow"])
    }

  return (
    <div>


      <table border={1}>
        <tr><th>Name</th><th>Price</th></tr>
        <tbody>

          {

            products.map((item,index) =>
              {
                return <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                     </tr>
              }
            )
          }

        </tbody>
      </table>

      <button onClick={addColor}>Add Color</button>
        
        <ul>
          {
            colors.map((item,index) =>
              {
                return <li key={index}>{item}</li>
              }
            )
          }
        </ul>
      

    </div>
  );
}

export default Demo6Comp;
