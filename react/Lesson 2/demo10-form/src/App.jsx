import { useState } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fName && lName) {
      const obj = { firstName: fName, lastName: lName };
      const { data } = await axios.post(USERS_URL, obj);
      console.log(data);
    } else {
      alert('Please enter a full name');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        First Name:{' '}
        <input type='text' onChange={(e) => setFName(e.target.value)} />
        <br />
        Last Name:{' '}
        <input type='text' onChange={(e) => setLName(e.target.value)} />
        <br />
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default App;
