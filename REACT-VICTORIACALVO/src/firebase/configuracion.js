
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJrXkjryIXez_a8VAFOnAOX4onF7_UYiw",
    authDomain: "react-victoriacalvo.firebaseapp.com",
    projectId: "react-victoriacalvo",
    storageBucket: "react-victoriacalvo.appspot.com",
    messagingSenderId: "640239834448",
    appId: "1:640239834448:web:f5fbb393223a1e7e064855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)