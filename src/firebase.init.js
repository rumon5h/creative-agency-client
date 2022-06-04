// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl_ywYiV4igrcQjnHvxugMsHKV_lkBnFU",
  authDomain: "creative-agency-4e380.firebaseapp.com",
  projectId: "creative-agency-4e380",
  storageBucket: "creative-agency-4e380.appspot.com",
  messagingSenderId: "851822190946",
  appId: "1:851822190946:web:21110fa5f6f792313acc3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;