// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDxx4PBkndi31OkRU4XmcfLbzJuk6SQq6U',
    authDomain: 'snappbay1111.firebaseapp.com',
    databaseURL: 'https://snappbay1111.firebaseio.com',
    projectId: 'snappbay1111',
    storageBucket: 'snappbay1111.appspot.com',
    messagingSenderId: '830183832964',
    appId: '1:830183832964:web:3020f13f077a52bfe431d1',
    measurementId: 'G-TE9GM61BEX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)