// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpijhjnnL4gm0gwxwxB0zC_htb6fqJDkM",
  authDomain: "wedding-budget-b8772.firebaseapp.com",
  projectId: "wedding-budget-b8772",
  storageBucket: "wedding-budget-b8772.appspot.com",
  messagingSenderId: "625781436789",
  appId: "1:625781436789:web:528bb2e0f3e7b0122a233c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);