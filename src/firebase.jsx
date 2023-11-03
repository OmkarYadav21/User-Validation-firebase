import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDupTgx90LeuGH2xdGkZKlMpx0PrA-oQQQ",
  authDomain: "assignment-1-c389b.firebaseapp.com",
  projectId: "assignment-1-c389b",
  storageBucket: "assignment-1-c389b.appspot.com",
  messagingSenderId: "1011125404392",
  appId: "1:1011125404392:web:e67c95f9eb675edff6bf5d",
  measurementId: "G-K7VGM2HL97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
