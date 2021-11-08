// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB79G1h6bgWcLUwKKb1qoHmxn_HSTsSIIg",
  authDomain: "e-commerce-sam.firebaseapp.com",
  projectId: "e-commerce-sam",
  storageBucket: "e-commerce-sam.appspot.com",
  messagingSenderId: "1061319553218",
  appId: "1:1061319553218:web:f4e0e3e0eb92029e300b5b"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

export default app;