import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa5sYIa8c9r-4Jwj9bzP7qi-ECelsn3vY",
  authDomain: "brosifer11.firebaseapp.com",
  projectId: "brosifer11",
  storageBucket: "brosifer11.appspot.com",
  messagingSenderId: "980519342622",
  appId: "1:980519342622:web:7a07792dda96f4bfae140f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const rtdb = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { db, rtdb, auth, googleProvider, githubProvider };
