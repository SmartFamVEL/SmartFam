// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb9WVn_MakJ91-aCpArIFaEZ038i69qtk",
  authDomain: "smartfam-auth.firebaseapp.com",
  projectId: "smartfam-auth",
  storageBucket: "smartfam-auth.firebasestorage.app",
  messagingSenderId: "446599779632",
  appId: "1:446599779632:web:791064a7773595755524f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;