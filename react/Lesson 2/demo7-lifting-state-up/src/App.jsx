import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [data, setData] = useState('');

  const getDataFromChild = (childValue) => {
    setData(childValue + '!');
  };

  return (
    <>
      <h1>Parent Component</h1>
      Data From Child: {data}
      <ChildComp callback={getDataFromChild} />
    </>
  );
};

export default App;
