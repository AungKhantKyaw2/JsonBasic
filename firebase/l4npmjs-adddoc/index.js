


import { initializeApp } from "firebase/app";
import { getFirestore ,addDoc,collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjPDPfZwOPLDOdQ4bgxN8ATIORskI9TBA",
  authDomain: "myfirstproject-4e6b3.firebaseapp.com",
  projectId: "myfirstproject-4e6b3",
  storageBucket: "myfirstproject-4e6b3.firebasestorage.app",
  messagingSenderId: "62478772673",
  appId: "1:62478772673:web:d1119749276b88e8a96740"
};


const app = initializeApp(firebaseConfig);
// console.log(app);


const db = getFirestore(app);
// console.log(db);


// addDoc(collection(db, "users"), {
//   name:"aung aung",
//   city:"Bago",
//   age:40
// })


//=> display auto generated id ! after dataset

addDoc(collection(db, "users"), {
  name:"yu ya",
  city:"Yangon",
  age:20
}).then(
    docRef=>{
      console.log(docRef.id);
    }
)
.catch(error => {
  console.log(error);
});


//Create Database
//https://console.firebase.google.com/ > Build > Firestore Database > Create Database


// Error for writing (PERMISSION_DENIED)
//Rules > allow read , write: if true; > Publish


//https://firebase.google.com/docs >Overview > Firebase fundanmentals > Web icon > Available Firebase services for web > Cloud Firebase for web


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