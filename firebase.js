// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGxOHlP0ueLptJ59ORTuEY8lkTEuPSYQ",
  authDomain: "levelup-86b2d.firebaseapp.com",
  projectId: "levelup-86b2d",
  storageBucket: "levelup-86b2d.appspot.com",
  messagingSenderId: "176016666342",
  appId: "1:176016666342:web:82b60ff0f70ad518fb5527",
  measurementId: "G-1P8BSGLECL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);