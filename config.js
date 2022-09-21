import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBuRb51OR6eZ67CWb-NcTMEQXXxJ5QDnxA",
  authDomain: "e-ride-stage-8-2bd9b.firebaseapp.com",
  projectId: "e-ride-stage-8-2bd9b",
  storageBucket: "e-ride-stage-8-2bd9b.appspot.com",
  messagingSenderId: "676315916811",
  appId: "1:676315916811:web:81c5a6d47b86bdf928350e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
