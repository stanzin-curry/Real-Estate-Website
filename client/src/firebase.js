// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-project-90671.firebaseapp.com",
  projectId: "estate-project-90671",
  storageBucket: "estate-project-90671.appspot.com",
  messagingSenderId: "291525312818",
  appId: "1:291525312818:web:c71e41d40eac6a993ad72b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);