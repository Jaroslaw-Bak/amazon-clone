import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA9m_zOtTmqFromuWXjdU_4aAMWaO1w6R0",
    authDomain: "clone-5b88a.firebaseapp.com",
    projectId: "clone-5b88a",
    storageBucket: "clone-5b88a.appspot.com",
    messagingSenderId: "255473248482",
    appId: "1:255473248482:web:9024cdb1be1df0a2ddd6bb",
    measurementId: "G-7SQDR93YR6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };