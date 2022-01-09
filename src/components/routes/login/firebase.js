// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOuyjxqN3Z322ur4IDHZ-ao6Gij2KHNcw",
  authDomain: "amaz0n-clone-eaflores.firebaseapp.com",
  projectId: "amaz0n-clone-eaflores",
  storageBucket: "amaz0n-clone-eaflores.appspot.com",
  messagingSenderId: "1097423285600",
  appId: "1:1097423285600:web:200b311856cfd40b2a8205",
  measurementId: "G-VYP751EVFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth();

//console.log(auth);

export { db, auth, analytics };
