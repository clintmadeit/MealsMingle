import { initializeApp } from "firebase/app";

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

export const loginRequest = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);
