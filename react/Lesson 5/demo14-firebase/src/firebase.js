import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCzwGqCtQYqxyPTHDb67nKPk8r4wov2xQ",
  authDomain: "fullstack-db21d.firebaseapp.com",
  projectId: "fullstack-db21d",
  storageBucket: "fullstack-db21d.firebasestorage.app",
  messagingSenderId: "575779885315",
  appId: "1:575779885315:web:399c1e8eec4a6163435936",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
