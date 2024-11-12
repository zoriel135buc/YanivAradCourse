import { useState } from "react";
import Ex2_1Child from "./Ex2_1Child";
function Ex2_1comp() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isTable, setIsTable] = useState(true);
  const addProd = () => {
    setProducts([...products, product]);
  };
  return (
    <div>
      product name:
      <input
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        type="text"
      />
      <br></br>
      product price:{" "}
      <input
        onChange={(e) => setProduct({ ...product, price: +e.target.value })}
        type="number"
      />
      <br />
      product color:{" "}
      <input
        onChange={(e) => setProduct({ ...product, color: e.target.value })}
        type="text"
      />
      <br></br>
      <button onClick={addProd}>save products</button>
      <button onClick={() => setIsTable(!isTable)}>Show products</button>
      {isTable ? <Ex2_1Child products={products} /> : null}
    </div>
  );
}

export default Ex2_1comp;
