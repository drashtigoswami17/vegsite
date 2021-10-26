// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurati
firebase.initializeApp( {
  apiKey: "AIzaSyDn7efC-m69rn1jevcOIRw6-cIJITcacak",
  authDomain: "vegmart-c4605.firebaseapp.com",
  databaseURL: "https://vegmart-c4605-default-rtdb.firebaseio.com",
  projectId: "vegmart-c4605",
  storageBucket: "vegmart-c4605.appspot.com",
  messagingSenderId: "402249625272",
  appId: "1:402249625272:web:1dd85811f72e821e484e4d"
})

// Initialize Firebase
firebase.firestore().collection('user').doc('9106942548').get().then(d=>{
    console.log(d.data());
});

