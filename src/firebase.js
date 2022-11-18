// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk069S6L69XM0AZGF56RViqQ4qC7-r4uM",
  authDomain: "quizoo-e6e2c.firebaseapp.com",
  projectId: "quizoo-e6e2c",
  storageBucket: "quizoo-e6e2c.appspot.com",
  messagingSenderId: "131936689382",
  appId: "1:131936689382:web:32d7d6d861c4270a366f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
