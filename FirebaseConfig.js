
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTIfG2JYtYVVNiSWZsSleyoGqV_qkyTwM",
  authDomain: "react-auth-7da70.firebaseapp.com",
  projectId: "react-auth-7da70",
  storageBucket: "react-auth-7da70.appspot.com",
  messagingSenderId: "230003710246",
  appId: "1:230003710246:web:07f48f82ecc58bae83c9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app)