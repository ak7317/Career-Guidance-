// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyAw41oiO6y-EuFZ-GoHcAlAWnI5WBrbgJw",
  authDomain: "careerguidance-4c6e1.firebaseapp.com",
  projectId: "careerguidance-4c6e1",
  storageBucket: "careerguidance-4c6e1.firebasestorage.app",
  messagingSenderId: "954867977780",
  appId: "1:954867977780:web:d86321c6c8c82cc963c461",
  measurementId: "G-FM68PSBRS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { app, auth, db };