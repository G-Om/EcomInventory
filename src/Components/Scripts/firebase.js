import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCLx9Poe5pRhCeDKWnFEY0qEG6J6gFkQHQ",
  authDomain: "final-year-project-94313.firebaseapp.com",
  projectId: "final-year-project-94313",
  storageBucket: "final-year-project-94313.appspot.com",
  messagingSenderId: "797271813942",
  appId: "1:797271813942:web:eb64d342d63018a2614d97",
  measurementId: "G-4GGKH44S0D"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
