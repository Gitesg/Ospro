// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdRP4CjNNzeqplDOCt4uzNM40_8R7TldA",
  authDomain: "wtcp-71f2d.firebaseapp.com",
  projectId: "wtcp-71f2d",
  storageBucket: "wtcp-71f2d.appspot.com",
  messagingSenderId: "844833217626",
  appId: "1:844833217626:web:4ac537e91365e3d2ca4c63",
  measurementId: "G-EHL0QVFLT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);