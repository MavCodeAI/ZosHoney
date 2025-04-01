import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmzTumPROYwmxDloPtx-t35H_VHu16JsI",
  authDomain: "darweshd3-46ddc.firebaseapp.com",
  projectId: "darweshd3-46ddc",
  storageBucket: "darweshd3-46ddc.firebasestorage.app",
  messagingSenderId: "324359730207",
  appId: "1:324359730207:web:797a8e51b77c2afba2912a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { db, auth };
export default app; 