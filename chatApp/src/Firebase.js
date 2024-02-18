import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTu6X9ez-VueFIFrRJzoGyvTDZTCbrZP4",
    authDomain: "chatter-box-a5744.firebaseapp.com",
    projectId: "chatter-box-a5744",
    storageBucket: "chatter-box-a5744.appspot.com",
    messagingSenderId: "978507356885",
    appId: "1:978507356885:web:811ba4b39fd9b3fcb0e05c",
    measurementId: "G-Z19RJX15NE"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()