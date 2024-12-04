import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbpFPACEHGJR0soF8F5WhGv436CP6YGD8",
  authDomain: "exercise9-4e3fa.firebaseapp.com",
  projectId: "exercise9-4e3fa",
  storageBucket: "exercise9-4e3fa.firebasestorage.app",
  messagingSenderId: "845614765674",
  appId: "1:845614765674:web:603906e115733fe8ee9c13",
  measurementId: "G-FVG776QGEG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
