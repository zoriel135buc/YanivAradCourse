import { useSelector } from 'react-redux';
import axios from 'axios';
import Product from './Product';

const PRODS_URL = 'http://localhost:3000/products';

const ProductsList = () => {
  const products = useSelector((state) => state.products);

  const saveOrder = () => {
    products.forEach((prod) => {
      axios.post(PRODS_URL, prod);
    });
  };

  return (
    <div
      style={{
        border: '3px solid blue',
        width: '300px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h3>Current Products in Order</h3>
      {products.map((prod) => {
        return <Product key={prod.serialNo} product={prod} />;
      })}
      <br />
      <button onClick={saveOrder}>Approve Order</button>
    </div>
  );
};

export default ProductsList;
