// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-23a06.firebaseapp.com",
  projectId: "mern-blog-23a06",
  storageBucket: "mern-blog-23a06.appspot.com",
  messagingSenderId: "660917892381",
  appId: "1:660917892381:web:da72cf6ef9b53a64aa5df4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);