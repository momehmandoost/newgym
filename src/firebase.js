import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP2BSVqR039STHRVOsQ3PBG51arQUVfRU",
  authDomain: "gymapp-d0c66.firebaseapp.com",
  projectId: "gymapp-d0c66",
  storageBucket: "gymapp-d0c66.appspot.com",
  messagingSenderId: "714583692169",
  appId: "1:714583692169:web:8bdab62a5f8a391c0f0758",
  measurementId: "G-VFXZZ44FK6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
