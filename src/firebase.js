import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa1sffLvil0QmJva9gAbBE02v9xdLdBYQ",
  authDomain: "full-netflix-build.firebaseapp.com",
  projectId: "full-netflix-build",
  storageBucket: "full-netflix-build.appspot.com",
  messagingSenderId: "434863537455",
  appId: "1:434863537455:web:a6566ba4e3764e2921b5da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
