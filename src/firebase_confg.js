import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDYCiwkp0yW8-qFDgtuOPVEu-FHWOKPH4s",
  authDomain: "todolistmz.firebaseapp.com",
  projectId: "todolistmz",
  storageBucket: "todolistmz.appspot.com",
  messagingSenderId: "574942018444",
  appId: "1:574942018444:web:e8f480cdf1c2d3e1d834a9",
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export { db };
