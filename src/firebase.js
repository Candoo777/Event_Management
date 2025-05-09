// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyA-HpGCEbuK-ZZjyrDiLmo1pSidYyOh4q4",
  authDomain: "event-management-c78e1.firebaseapp.com",
  projectId: "event-management-c78e1",
  storageBucket: "event-management-c78e1.appspot.com",
  messagingSenderId: "327910548552",
  appId: "1:327910548552:web:81472a4099f42900b5647d",
  measurementId: "G-PWXPV14XN6"
};

const app = initializeApp(firebaseConfig);

// ✅ Export Firestore DB instance
export const db = getFirestore(app);

export default app;
