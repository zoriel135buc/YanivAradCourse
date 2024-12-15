import useMinimalFetch from './hooks/useMinimalFetch';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const minimalUsers = useMinimalFetch(USERS_URL);

  return <>{console.log('Minimal Users:', minimalUsers)}</>;
};

export default App;
