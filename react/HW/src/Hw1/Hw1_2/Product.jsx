import { useState } from "react";
function Product() {
  const [Product, setProduct] = useState({});
  return (
    <>
      <h1>products</h1>
      Product Name:{" "}
      <input
        onChange={(e) => setProduct({ ...Product, name: e.target.value })}
        type="text"
      />{" "}
      <br />
      Product Price:{" "}
      <input
        onChange={(e) => setProduct({ ...Product, price: +e.target.value })}
        type="number"
      />{" "}
      <br />
      Product Color:{" "}
      <input
        onChange={(e) => setProduct({ ...Product, color: e.target.value })}
        type="text"
      />{" "}
      <br />
      <button type="submit">save</button>
    </>
  );
}
export default Product;
