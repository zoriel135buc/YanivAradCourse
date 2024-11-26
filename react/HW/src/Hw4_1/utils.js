import axios from "axios";

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlTodos = "https://jsonplaceholder.typicode.com/todos";

const getUserFullData = async (id) => {
  const { data: user } = await axios.get(`${urlUsers}/${id}`);
  const { data: todos } = await axios.get(`${urlTodos}?userId=${id}`);
  const { data: posts } = await axios.get(`${urlPosts}?userId=${id}`);
  return {
    name: user.name,
    email: user.email,
    todos: todos.slice(0, 5).map((todo) => todo.title),
    posts: posts[0].title,
  };
};
export { getUserFullData };
