import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const f_api_key = process.env.REACT_APP_FIREBASE_KEY;
// Firebase configuration
const firebaseConfig = {
  apiKey: f_api_key,
  authDomain: "reach-6b127.firebaseapp.com",
  projectId: "reach-6b127",
  storageBucket: "reach-6b127.appspot.com",
  messagingSenderId: "628007090157",
  appId: "1:628007090157:web:b0ef7e65f1e79eed8f59e4",
  measurementId: "G-08MK8ZWP4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);