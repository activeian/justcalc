import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHMZiVtGwds7wrYN_rPfkuk3cafyGiOXQ",
  authDomain: "todo-6095a.firebaseapp.com",
  projectId: "todo-6095a",
  storageBucket: "todo-6095a.appspot.com",
  messagingSenderId: "60010019805",
  appId: "1:60010019805:web:7a309712d83aec9c42d434",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { FacebookAuthProvider, GoogleAuthProvider, auth, createUserWithEmailAndPassword, db, doc, facebookProvider, fetchSignInMethodsForEmail, googleProvider, setDoc, signInWithEmailAndPassword, signInWithPopup };

