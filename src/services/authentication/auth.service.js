import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.config";

// Login function
export const loginRequest = (email, password) => {
  if (!auth) {
    return Promise.reject(new Error("Firebase Auth not initialized"));
  }
  return signInWithEmailAndPassword(auth, email, password);
};

// Register function
export const registerRequest = (email, password) => {
  if (!auth) {
    return Promise.reject(new Error("Firebase Auth not initialized"));
  }
  return createUserWithEmailAndPassword(auth, email, password);
};
