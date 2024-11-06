import { getById } from './utils';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const getUserById = async () => {
    // // Option 1
    // const resp = await getById(USERS_URL, 3);
    // const user = resp.data;
    // Option 2 - Destructuring
    const { data: user } = await getById(USERS_URL, 3);
    console.log('User: ', user);
  };

  return (
    <>
      <button onClick={getUserById}>Get User</button>
    </>
  );
};

export default Users;
