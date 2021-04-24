import firebase from "firebase";

 var firebaseApp = firebase.initializeApp({
  // Your firebase credentials 
  apiKey: "AIzaSyAbRuJLABprqlOuCsdYKRkoB1huR9T6ffk",
  authDomain: "feliz-form.firebaseapp.com",
  projectId: "feliz-form",
  storageBucket: "feliz-form.appspot.com",
  messagingSenderId: "244838831930",
  appId: "1:244838831930:web:be24a4b459e17a3b7ca203"
});
var db = firebaseApp.firestore();
export { db };