// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c144a.firebaseapp.com",
  projectId: "mern-estate-c144a",
  storageBucket: "mern-estate-c144a.appspot.com",
  messagingSenderId: "669223657460",
  appId: "1:669223657460:web:19f334e594a0d218ce63a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 