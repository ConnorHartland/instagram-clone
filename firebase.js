// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlfCA-fVw2ylPN9xuSCsk1anEkI72iKl0",
  authDomain: "insta-clone-c6907.firebaseapp.com",
  projectId: "insta-clone-c6907",
  storageBucket: "insta-clone-c6907.appspot.com",
  messagingSenderId: "211953942098",
  appId: "1:211953942098:web:e28d8af323a79ba560298b",
  measurementId: "G-LXCDPJPBRS",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
