import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCf7NkiaOl_YmNe9d6rLlEbKzEMlIWCF7Q',
  authDomain: 'cars-6f13a.firebaseapp.com',
  projectId: 'cars-6f13a',
  storageBucket: 'cars-6f13a.firebasestorage.app',
  messagingSenderId: '684511507424',
  appId: '1:684511507424:web:4e579be704536b783d7185',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
