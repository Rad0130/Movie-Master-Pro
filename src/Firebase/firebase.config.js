// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD20EQ0zFJ6a0x9ErIKz6RzbvWhaU5i04c",
  authDomain: "movie-master-145da.firebaseapp.com",
  projectId: "movie-master-145da",
  storageBucket: "movie-master-145da.firebasestorage.app",
  messagingSenderId: "334284937527",
  appId: "1:334284937527:web:cc0d85d03aaacb3f58a2b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);