// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDr1as8LnIJCYXVnnwyApB3FPpqonl9Opc",
  authDomain: "parlour-website-authenti-56086.firebaseapp.com",
  projectId: "parlour-website-authenti-56086",
  storageBucket: "parlour-website-authenti-56086.appspot.com",
  messagingSenderId: "474702120257",
  appId: "1:474702120257:web:616e83cd7a87d39d1bcdc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
