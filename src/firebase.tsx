

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB6tcenHNen6Bwgb6BiXGIk8qb9L8h3QgI",
  authDomain: "sdshao-56e2c.firebaseapp.com",
  projectId: "sdshao-56e2c",
  storageBucket: "sdshao-56e2c.appspot.com",
  messagingSenderId: "282841135403",
  appId: "1:282841135403:web:e151a8d64a3cc53c4f6d6e",
  measurementId: "G-JJ2NT4263X"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export const db = getFirestore(app);

export { auth, storage }