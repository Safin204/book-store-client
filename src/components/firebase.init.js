

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB788wOVunq8bEAHqJ3SMWRDfG_LjAMY3Y",
  authDomain: "assighnment11.firebaseapp.com",
  projectId: "assighnment11",
  storageBucket: "assighnment11.appspot.com",
  messagingSenderId: "162273793538",
  appId: "1:162273793538:web:d64289c19f31e5298d791b",
  measurementId: "G-Q1YBVM0KTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
