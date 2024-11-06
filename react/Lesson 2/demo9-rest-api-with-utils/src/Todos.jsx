import { getById } from './utils';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const Todos = () => {
  const getTodoById = async () => {
    const { data: todo } = await getById(TODOS_URL, 8);
    console.log('Todo: ', todo);
  };

  return (
    <>
      <button onClick={getTodoById}>Get Todo</button>
    </>
  );
};

export default Todos;
