console.log('hello sir how are you');



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjPDPfZwOPLDOdQ4bgxN8ATIORskI9TBA",
  authDomain: "myfirstproject-4e6b3.firebaseapp.com",
  projectId: "myfirstproject-4e6b3",
  storageBucket: "myfirstproject-4e6b3.firebasestorage.app",
  messagingSenderId: "62478772673",
  appId: "1:62478772673:web:d1119749276b88e8a96740"
};


const app = initializeApp(firebaseConfig);
console.log(app);

console.log("Server is working");

const db = getFirestore(app);
console.log(db);


//https://firebase.google.com >Overview > Firebase fundanmentals > Web icon > Available Firebase services for web > Cloud Firebase for web


//=> In Terminal
// cd l3npm.js
//node index.js
//or 
// nodemon index.js(auto reset after ctl+s)
//or
//rs


//optional
//npm init -y


//npm install firebase or npm i firebase