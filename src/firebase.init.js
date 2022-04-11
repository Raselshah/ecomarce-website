// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLxqEUDwnXJXOuMurH7ropagkQ4Ad54E",
  authDomain: "ema-jhon-1f4a8.firebaseapp.com",
  projectId: "ema-jhon-1f4a8",
  storageBucket: "ema-jhon-1f4a8.appspot.com",
  messagingSenderId: "229587801398",
  appId: "1:229587801398:web:623a18911a2dee4e9d0f97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
