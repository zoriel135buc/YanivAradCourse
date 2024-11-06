import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (per) => {
    setPersons([...persons, per]);
  };

  return (
    <div style={{ backgroundColor: 'yellow', width: '500px' }}>
      <h1>Parent Component</h1>
      <ul>
        {persons.map((per, index) => {
          return (
            <li key={index}>
              {per.name} is {per.age} years old, lives in {per.city} and S.He is{' '}
              {per.isAdult ? 'an' : 'not an'} adult
            </li>
          );
        })}
      </ul>
      <ChildComp callback={addPerson} />
    </div>
  );
};

export default App;
