import { useSelector } from 'react-redux';

const AdultUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h3>Adult Users:</h3>
      <table border='1'>
        <tbody>
          {users
            .filter((user) => user.age >= '18')
            .map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AdultUsers;
