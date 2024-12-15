import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwBrWLoQ2wZYUGxmX47PUaRgkQxfEvIVg",
  authDomain: "cars-11176.firebaseapp.com",
  projectId: "cars-11176",
  storageBucket: "cars-11176.firebasestorage.app",
  messagingSenderId: "1053369187323",
  appId: "1:1053369187323:web:4d14871b5411a62344695e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
