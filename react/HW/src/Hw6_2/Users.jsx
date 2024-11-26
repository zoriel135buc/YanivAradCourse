import React from "react";
import UsersChild from "./UsersChild";
import { getCarts, getProducts, GetUsers } from "./utils";
import { useState, useEffect } from "react";
const Users_Ex6 = () => {
  const [saveData, setSaveData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [cartsData, setCartsData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: carts } = await getCarts();
      const { data: users } = await GetUsers();
      const { data: products } = await getProducts();
      setCartsData(carts);
      setProductsData(products);
      setUsersData(users);
    };
    fetchData();
  }, []);

  useEffect(() => {}, [productsData.length]);

  return (
    <div>
      {saveData.map((item) => {
        <UsersChild saveData={saveData} />;
      })}
    </div>
  );
};

export default Users_Ex6;
