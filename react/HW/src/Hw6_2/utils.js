import axios from "axios";

const USERS_URL = `https://fakestoreapi.com/users`;
const USER_CARTS = `https://fakestoreapi.com/carts`;
const USER_PRODUCTS = `https://fakestoreapi.com/products`;

const GetUsers = () => axios.get(USERS_URL);

const getCarts = (id) => axios.get(`${USER_CARTS}/${id}`);

const getProducts = (id) => axios.get(`${USER_PRODUCTS}/${id}`);

export { getCarts, getProducts, GetUsers };
