// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWo1HNUaHhd7KIDpAw8LLAvs65KEvSts8",
  authDomain: "planora-894a6.firebaseapp.com",
  projectId: "planora-894a6",
  storageBucket: "planora-894a6.appspot.com",
  messagingSenderId: "593458646742",
  appId: "1:593458646742:web:dcc4898c62e2fd008d4377",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ AUTH (THIS IS WHAT YOU NEED)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
