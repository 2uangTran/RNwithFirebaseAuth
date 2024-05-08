// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAylMofNDe0dfVJit4bys4OrdMgdrnuZnI",
  authDomain: "ktgk2-22f9c.firebaseapp.com",
  projectId: "ktgk2-22f9c",
  storageBucket: "ktgk2-22f9c.appspot.com",
  messagingSenderId: "532562916475",
  appId: "1:532562916475:web:7480db9134cbf04f1c1ede",
  measurementId: "G-TKC5KJYQFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);