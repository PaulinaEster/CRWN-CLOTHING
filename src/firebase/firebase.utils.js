import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGt6LUdEDYpky62BAioh7-sfOYwLndtX4",
  authDomain: "crw-db-e2798.firebaseapp.com",
  projectId: "crw-db-e2798",
  storageBucket: "crw-db-e2798.appspot.com",
  messagingSenderId: "861084410490",
  appId: "1:861084410490:web:14837e1a159dfd2c3e51c3",
  measurementId: "G-0FL1M04YQY"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };


/* import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
  apiKey: "AIzaSyAGt6LUdEDYpky62BAioh7-sfOYwLndtX4",
    authDomain: "crw-db-e2798.firebaseapp.com",
    projectId: "crw-db-e2798",
    storageBucket: "crw-db-e2798.appspot.com",
    messagingSenderId: "861084410490",
    appId: "1:861084410490:web:14837e1a159dfd2c3e51c3",
    measurementId: "G-0FL1M04YQY"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'selet_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;  */