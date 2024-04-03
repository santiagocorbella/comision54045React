import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAGZ-6c0YpQlczMXwchb5EaOFQ7NTW8Czc",
  authDomain: "backend54045-3297e.firebaseapp.com",
  projectId: "backend54045-3297e",
  storageBucket: "backend54045-3297e.appspot.com",
  messagingSenderId: "1056196192832",
  appId: "1:1056196192832:web:49f563a0db998cebd1cda5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)