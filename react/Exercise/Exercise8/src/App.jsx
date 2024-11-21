import { useState } from "react";
import User from "./components/User";
import UserTable from "./components/UserTable";
import UserAdult from "./components/UserAdult";
import "./App.css";

function App() {
  return (
    <>
      <User />
      <UserTable />
      <UserAdult />
    </>
  );
}

export default App;
