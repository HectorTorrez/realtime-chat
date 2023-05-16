// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs9jducfka9QrZwHuSHNz89msK9fcCSEE",
    authDomain: "realtime-chat-f15e9.firebaseapp.com",
    projectId: "realtime-chat-f15e9",
    storageBucket: "realtime-chat-f15e9.appspot.com",
    messagingSenderId: "921863991729",
    appId: "1:921863991729:web:aedbda96af437114cf0d90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);