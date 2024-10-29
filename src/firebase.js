import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOC2anJZn9KlHY36ZdC5SeYZPFNNARs3E",
  authDomain: "book-recommendor-5b132.firebaseapp.com",
  projectId: "book-recommendor-5b132",
  storageBucket: "book-recommendor-5b132.appspot.com",
  messagingSenderId: "495811813946",
  appId: "1:495811813946:web:34f26ca93c1ea2691c0b03",
  measurementId: "G-9ECG8D269L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
