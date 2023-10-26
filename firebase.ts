// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4lvr8BBQDPrfKw-n1cMOoZjwyar0orlI",
  authDomain: "udemy-clone-uploads.firebaseapp.com",
  projectId: "udemy-clone-uploads",
  storageBucket: "udemy-clone-uploads.appspot.com",
  messagingSenderId: "714564598801",
  appId: "1:714564598801:web:daca228251da6c32a585b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
