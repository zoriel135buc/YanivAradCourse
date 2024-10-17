import { useState } from "react";
import Demo7_ProductComp from "./Demo7_Product";

function Demo7_ProductsComp() {

  const [products, setProducts] = useState([{name : "TV", price : 200}, {name : "Watch", price : 300}])


  return (
    <div style={ { width : "500px", border : "solid 1px red"} } >

        <h3>Products List</h3>

        {
          products.map((item,index) =>
          {
            return <Demo7_ProductComp prodData={item} key={index} />
          })
        }
       

    </div>
  );
}

export default Demo7_ProductsComp;
