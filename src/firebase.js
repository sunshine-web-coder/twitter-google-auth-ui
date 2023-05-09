import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7H2_5OYIDzau1Xbxe190smyK6jHYpV8g",
  authDomain: "twitter-auth-ed6fc.firebaseapp.com",
  projectId: "twitter-auth-ed6fc",
  storageBucket: "twitter-auth-ed6fc.appspot.com",
  messagingSenderId: "1074239753470",
  appId: "1:1074239753470:web:0aa8b75471ba32d179a9af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };