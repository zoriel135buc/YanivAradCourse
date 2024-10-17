import { useState } from "react";
import Comp_H2Child from "./Comp_H2Child";

function Comp_Show() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isTable, setIsTable] = useState(false);

  const addProd = () => {
    setProducts([...products, product]);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          placeItems: "center",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <h2>Comp_H2</h2>
        product name:
        <input
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          type="text"
        ></input>
        <br />
        product price:
        <input
          onChange={(e) => setProduct({ ...product, price: +e.target.value })}
          type="number"
        ></input>
        <br />
        product color:
        <input
          onChange={(e) => setProduct({ ...product, color: e.target.value })}
          type="text"
        ></input>
        <br />
        <br />
        <button onClick={addProd}>save</button>
        <br />
        <button onClick={() => setIsTable(!isTable)}>show Product</button>
        {isTable ? <Comp_H2Child products={products} /> : null}
      </div>
    </div>
  );
}

export default Comp_Show;
