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
  apiKey: "AIzaSyB5BUUf4rx3xhral-_YLtRthb49vmU5yDc",
  authDomain: "parlour-website-authentication.firebaseapp.com",
  projectId: "parlour-website-authentication",
  storageBucket: "parlour-website-authentication.appspot.com",
  messagingSenderId: "25820691119",
  appId: "1:25820691119:web:03249ce3c3a1d88f74725a"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
