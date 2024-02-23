import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsaLdHZKXhVDegODN3jH7IcG10PRVUwfw",
  authDomain: "comision-49970-246d9.firebaseapp.com",
  projectId: "comision-49970-246d9",
  storageBucket: "comision-49970-246d9.appspot.com",
  messagingSenderId: "815798501848",
  appId: "1:815798501848:web:618022cdb25844d47932ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
