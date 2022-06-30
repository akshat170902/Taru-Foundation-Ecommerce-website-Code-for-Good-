import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDP8Ku2tk9qEKlPmf7hyTTeR6NAxf4SEJQ",
  authDomain: "code-for-good-demo-b8298.firebaseapp.com",
  projectId: "code-for-good-demo-b8298",
  storageBucket: "code-for-good-demo-b8298.appspot.com",
  messagingSenderId: "1097967263326",
  appId: "1:1097967263326:web:3f864c3b52c6f9f5981ecf",
  measurementId: "G-Q836WGDLVP"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export
