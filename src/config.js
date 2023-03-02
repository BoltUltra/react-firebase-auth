import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API,
  authDomain: "react-authentication-7351a.firebaseapp.com",
  projectId: "react-authentication-7351a",
  storageBucket: "react-authentication-7351a.appspot.com",
  messagingSenderId: "389018077476",
  appId: "1:389018077476:web:91d87caaca879ad9770bb1",
  measurementId: "G-Z8N6GE319N",
};

export default firebaseConfig;
