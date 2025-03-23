import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.JKAPIKEY,
  authDomain: "jossankalle2025.firebaseapp.com",
  projectId: "jossankalle2025",
  storageBucket: "jossankalle2025.firebasestorage.app",
  messagingSenderId: "563721878244",
  appId: "1:563721878244:web:99e273b38f8257a6ef4af1",
  measurementId: "G-91ZTVEF83V",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
