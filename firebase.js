// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe2ouI4t23pZWQNsQbSUmNwEU9cLshiY0",  // whatever
    authDomain: "shengji-bc61c.firebaseapp.com",
    projectId: "shengji-bc61c",
    storageBucket: "shengji-bc61c.appspot.com",
    messagingSenderId: "526528559667",
    appId: "1:526528559667:web:f22294f74c2fc56838c146",
    measurementId: "G-P65PP4QGVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);