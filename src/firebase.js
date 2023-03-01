import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD1CRr8LoewBROhyeMUlh6qClyxAQSFeI0",
    authDomain: "eshop-2c56b.firebaseapp.com",
    projectId: "eshop-2c56b",
    storageBucket: "eshop-2c56b.appspot.com",
    messagingSenderId: "229583325595",
    appId: "1:229583325595:web:e2fd584e3781393b62f93e",
    measurementId: "G-2GSH1XFRY1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth }