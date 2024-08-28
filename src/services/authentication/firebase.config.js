import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBerv3gxQW_sPjsalVIUX2LqO3-0J1DH4A",
  authDomain: "meals-mingle.firebaseapp.com",
  projectId: "meals-mingle",
  storageBucket: "meals-mingle.appspot.com",
  messagingSenderId: "982330948880",
  appId: "1:982330948880:web:b43df9f40d1fb0bce0b995",
};

const app = initializeApp(firebaseConfig);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  console.error("Failed to initialize Firebase Auth:", error);
  auth = getAuth(app); // Use getAuth if already initialized
}

export { auth };
