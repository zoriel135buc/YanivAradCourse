import axios from "axios";

const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`;

const getUserFullData = () => axios.get(USERS_URL);

const get3TopTasks = (id) => axios.get(`${TODOS_URL}?userId=${id}`);

export { getUserFullData, get3TopTasks };
