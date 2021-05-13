// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjip3NtpdG5bT3mirX2LioQP0LsuEv2bY",
  authDomain: "clone-6ba72.firebaseapp.com",
  projectId: "clone-6ba72",
  storageBucket: "clone-6ba72.appspot.com",
  messagingSenderId: "270538569055",
  appId: "1:270538569055:web:601d51b4008b0d6d7032ea",
  measurementId: "G-FKFF5N98J6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
