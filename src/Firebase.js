// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzeMQ8q3XTU5I28zucQJ-Q16Smaus1scg",
  authDomain: "chatgpt-e10ce.firebaseapp.com",
  projectId: "chatgpt-e10ce",
  storageBucket: "chatgpt-e10ce.firebasestorage.app",
  messagingSenderId: "247669618260",
  appId: "1:247669618260:web:d64613fecd2b4eef069fc1",
  measurementId: "G-X3ELVVT1LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { db,auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
