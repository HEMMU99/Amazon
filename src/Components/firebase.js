// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAcXrbMp8p6J9ujLKIpNBAq-p8dTviI81g",
  authDomain: "clone-9d8d0.firebaseapp.com",
  projectId: "clone-9d8d0",
  storageBucket: "clone-9d8d0.appspot.com",
  messagingSenderId: "34623518932",
  appId: "1:34623518932:web:c92dc6a6bd7ac44627e341",
  measurementId: "G-R90RZKGPSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);