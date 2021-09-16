import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhM1RrobbhOaEtu3nETMqDF9XrlEOZq_I",
    authDomain: "champions-b576c.firebaseapp.com",
    databaseURL: "https://champions-b576c-default-rtdb.firebaseio.com",
    projectId: "champions-b576c",
    storageBucket: "champions-b576c.appspot.com",
    messagingSenderId: "219642946907",
    appId: "1:219642946907:web:c4c47215b2a37fffef667e",
    measurementId: "G-CXF7LTRM0F"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();