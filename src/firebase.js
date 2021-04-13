import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwSz1yPuAPwwfzoFif2rb0oHGEAYetNOk",
  authDomain: "facebook-clone-c4ebc.firebaseapp.com",
  projectId: "facebook-clone-c4ebc",
  storageBucket: "facebook-clone-c4ebc.appspot.com",
  messagingSenderId: "786573736332",
  appId: "1:786573736332:web:29f10ca76891626f173ea9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;