import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore'; // Import the Firestore module

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEMa1jHPsVeX4cC75-fY6v34Vlr-vO2gM",
  authDomain: "reach-6b127.firebaseapp.com",
  projectId: "reach-6b127",
  storageBucket: "reach-6b127.appspot.com",
  messagingSenderId: "628007090157",
  appId: "1:628007090157:web:b0ef7e65f1e79eed8f59e4",
  measurementId: "G-08MK8ZWP4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Rename 'firestore' to 'db'

export { app, analytics, db }; // Update the export statement