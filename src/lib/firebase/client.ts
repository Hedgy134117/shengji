// src/lib/firebase/firebase.client.ts
import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your firebase client SDK config goes here.
const firebaseConfig = {
    apiKey: "AIzaSyBb27R2Vp3Bp3EjLxREN6HfQB_a1RmLg_Y",
    authDomain: "shengji-remake.firebaseapp.com",
    projectId: "shengji-remake",
    storageBucket: "shengji-remake.firebasestorage.app",
    messagingSenderId: "469378422913",
    appId: "1:469378422913:web:03e06b38426ebc3b5ad580"
};

let firebaseApp: FirebaseApp | undefined;

// Create a singleton of the Firebase client app
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApps()[0];
}

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
// Export other Firebase services as needed (e.g., storage, functions)