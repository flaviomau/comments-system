import Rebase from 're-base'
import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDINb6cS6_Tr5Q20mTX8XDNhbaypEmEQJw",
    authDomain: "commentssystem-fca4c.firebaseapp.com",
    databaseURL: "https://commentssystem-fca4c.firebaseio.com",
    projectId: "commentssystem-fca4c",
    storageBucket: "",
    messagingSenderId: "554877164330"
  });

const db = firebase.database(firebaseapp)
const base = Rebase.createClass(db)

export default base