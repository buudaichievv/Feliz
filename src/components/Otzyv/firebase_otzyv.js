// import firebase from "firebase";

import { renderEntireTree } from "../../render"

//  var firebaseApp = firebase.initializeApp({
//   // Your firebase credentials 
//   apiKey: "AIzaSyAbRuJLABprqlOuCsdYKRkoB1huR9T6ffk",
//   authDomain: "feliz-form.firebaseapp.com",
//   projectId: "feliz-form",
//   storageBucket: "feliz-form.appspot.com",
//   messagingSenderId: "244838831930",
//   appId: "1:244838831930:web:be24a4b459e17a3b7ca203"
// });
// var db = firebaseApp.firestore();
// export { db };

let store = {
  post:[
  {mess:"SVG React Lorem ipsum dolor sit amet,consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animilaudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... ",name:"Aman Ibraev"},
  {mess:"SVG React Lorem ipsum dolor sit amet,consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animilaudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... ",name:"Aman Ibraev"},
  {mess:"SVG React Lorem ipsum dolor sit amet,consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animilaudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... ",name:"Aman Ibraev"},
  ]
}
export let newOtzyv = (Text,Name) =>{
  let newPostOtzyv = {
    mess:Text,
    name:Name,
}
store.post.push(newPostOtzyv)
renderEntireTree(store)
}
export default store;