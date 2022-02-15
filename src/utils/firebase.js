import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyKch4GnNnyvTKaXHcjM_5wB9J-3Wu_dY",
    authDomain: "clone-5bfad.firebaseapp.com",
    projectId: "clone-5bfad",
    storageBucket: "clone-5bfad.appspot.com",
    messagingSenderId: "902450925756",
    appId: "1:902450925756:web:49e791e2b8abfb611280b9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};
