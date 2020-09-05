import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMvIoY4ZRmJ-ehNZ8xPH7RhXJWFQdP9A0",
    authDomain: "todo-app-3606c.firebaseapp.com",
    databaseURL: "https://todo-app-3606c.firebaseio.com",
    projectId: "todo-app-3606c",
    storageBucket: "todo-app-3606c.appspot.com",
    messagingSenderId: "33985785045",
    appId: "1:33985785045:web:b04d086737ca42d05e465c",
    measurementId: "G-MMSYWRDBV4"
});

const db = firebaseApp.firestore();
export default db;