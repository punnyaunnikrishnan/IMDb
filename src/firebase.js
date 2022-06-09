// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//firebase configuration file which give access to the database.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmP6QBpgtipjb8rsS6DQ_lDKYVk9WDNo8",
  authDomain: "imdb-e5ead.firebaseapp.com",
  projectId: "imdb-e5ead",
  storageBucket: "imdb-e5ead.appspot.com",
  messagingSenderId: "902137605107",
  appId: "1:902137605107:web:4972ee63c2297df9db4086",
  measurementId: "G-Z9JH7DMT14"
};
//initialize the firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase database
const db = firebaseApp.firestore();
//firebase authentication
export const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//firebase storage access
const storage = firebase.storage;

export { provider, storage, db };
export default db;
