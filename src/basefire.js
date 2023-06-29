import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARykQUasx1IlaLQ8CtcUSrpJPESB8e42Y",
  authDomain: "linkedin-clone-11e16.firebaseapp.com",
  projectId: "linkedin-clone-11e16",
  storageBucket: "linkedin-clone-11e16.appspot.com",
  messagingSenderId: "539871307316",
  appId: "1:539871307316:web:b8d7811a2959d8351c0c61",
  measurementId: "G-ES442F3NW8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
