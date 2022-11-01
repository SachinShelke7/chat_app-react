// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5a6jpd01VSapxNYS07hRjPhfNFW2V0qY",
  authDomain: "chat-app-react-85770.firebaseapp.com",
  projectId: "chat-app-react-85770",
  storageBucket: "chat-app-react-85770.appspot.com",
  messagingSenderId: "233364593632",
  appId: "1:233364593632:web:867ab6332cafe783646985",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
