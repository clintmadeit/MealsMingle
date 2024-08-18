import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Init firebase
const firebaseConfig = {
  apiKey: "AIzaSyBerv3gxQW_sPjsalVIUX2LqO3-0J1DH4A",
  authDomain: "meals-mingle.firebaseapp.com",
  projectId: "meals-mingle",
  storageBucket: "meals-mingle.appspot.com",
  messagingSenderId: "982330948880",
  appId: "1:982330948880:web:b43df9f40d1fb0bce0b995",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
