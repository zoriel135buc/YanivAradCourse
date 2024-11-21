import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'red', width: '400px', height: '400px' }}>
      <h1>Homepage</h1>
      {/* Option 1 */}
      <Link to='/about'>About Page</Link> <br />
      <br /> <br />
      {/* Option 2 */}
      <button onClick={() => navigate('/about')}>About Page</button>
      <h3
        style={{ width: 'fit-content' }}
        onMouseOver={() => navigate('/about')}
      >
        About Page
      </h3>
    </div>
  );
};

export default Homepage;
