import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfMKuAAhM6hS_-TurQVKEBSa6Sj1kvS0",
  authDomain: "e-commerce-jota.firebaseapp.com",
  projectId: "e-commerce-jota",
  storageBucket: "e-commerce-jota.appspot.com",
  messagingSenderId: "154926321576",
  appId: "1:154926321576:web:507d67ef327b632217979d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
