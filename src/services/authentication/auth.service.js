<<<<<<< HEAD
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.config";
=======
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
>>>>>>> a79124ca94828f75eddc18a7fe865ede6b809ee5

// Login function
export const loginRequest = (email, password) => {
  if (!auth) {
    return Promise.reject(new Error("Firebase Auth not initialized"));
  }
  return signInWithEmailAndPassword(auth, email, password);
};

<<<<<<< HEAD
// Register function
export const registerRequest = (email, password) => {
  if (!auth) {
    return Promise.reject(new Error("Firebase Auth not initialized"));
  }
  return createUserWithEmailAndPassword(auth, email, password);
};
=======
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
>>>>>>> a79124ca94828f75eddc18a7fe865ede6b809ee5
