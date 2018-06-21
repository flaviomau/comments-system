import Rebase from 're-base'
import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  });

const db = firebase.database(firebaseapp)
const base = Rebase.createClass(db)

export default base