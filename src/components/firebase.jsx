import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"

 

const firebaseConfig = {
    apiKey: "AIzaSyCEY1kwDIh6fAXbm_APoacf71eyC07tugI",
    authDomain: "happyday-f7b9c.firebaseapp.com",
    projectId: "happyday-f7b9c",
    storageBucket: "happyday-f7b9c.appspot.com",
    messagingSenderId: "1064828022443",
    appId: "1:1064828022443:web:b0b275896b3c6abdd3d1ee",
    measurementId: "G-WT6JZSS5HL"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)