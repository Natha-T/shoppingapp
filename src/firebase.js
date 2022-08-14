import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, onAuthStateChanged , GoogleAuthProvider} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/auth";



/*
const app = firebase.initializeApp({



});




export const db = getFirestore(app);
/*
export const auth = app.auth();
export default app

*/


const firebaseConfig = {


  apiKey: "AIzaSyC45ECkTTyYS3GL_d4zIUtlnih23n802NY",
    authDomain: "hustlegang-8128f.firebaseapp.com",
    projectId: "hustlegang-8128f",
    storageBucket: "hustlegang-8128f.appspot.com",
    messagingSenderId: "326951198319",
    appId: "1:326951198319:web:73ebbaae404b125c80b79a",
    measurementId: "G-374SF8C445"

  };

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);



const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export  {auth, provider};



/*
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
*/