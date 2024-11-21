import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div
      style={{ backgroundColor: 'lightblue', width: '400px', height: '400px' }}
    >
      <h1>Products Page</h1>
      <Link to='/product/1/Watch'>Watch</Link> <br />
      <Link to='/product/2/TV'>TV</Link> <br />
      <Link to='/product/3/Table'>Table</Link> <br />
    </div>
  );
};

export default Products;
