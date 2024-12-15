import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddCar from "./components/AddCar";

import Cars from "./components/Cars";
import db from "./fireBase";
import { collection, onSnapshot, query } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, "cars"));
    onSnapshot(q, (qSnapshot) => {
      const cars = qSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          status: "UNCHANGED",
        };
      });
      dispatch({ type: "LOAD", payload: cars });
    });
  }, []);
  return (
    <>
      <h1>cars website</h1>
      <div style={{ float: "left", width: "50%" }}>
        <Cars />
      </div>
      <div style={{ float: "right", width: "50%" }}>
        <AddCar />
      </div>
    </>
  );
}

export default App;
