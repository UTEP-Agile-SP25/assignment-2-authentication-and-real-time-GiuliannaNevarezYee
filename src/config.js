// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPwPkuIgIjFsoekRa5NuypKI7L4FgU5s",
  authDomain: "nevarez-yee.firebaseapp.com",
  projectId: "nevarez-yee",
  storageBucket: "nevarez-yee.firebasestorage.app",
  messagingSenderId: "865775878159",
  appId: "1:865775878159:web:ac85752d8690c5b6afa37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app