// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC1hdAJnyP4r6ZS7MkubW6FxtwDFQoK9k8",
    authDomain: "slack-clone-82a86.firebaseapp.com",
    projectId: "slack-clone-82a86",
    storageBucket: "slack-clone-82a86.appspot.com",
    messagingSenderId: "611118935981",
    appId: "1:611118935981:web:1eb45167bb20cbace47b24",
    measurementId: "G-VJWF19NFYH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth ,provider, db}