
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc,collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjPDPfZwOPLDOdQ4bgxN8ATIORskI9TBA",
  authDomain: "myfirstproject-4e6b3.firebaseapp.com",
  projectId: "myfirstproject-4e6b3",
  storageBucket: "myfirstproject-4e6b3.firebasestorage.app",
  messagingSenderId: "62478772673",
  appId: "1:62478772673:web:d1119749276b88e8a96740"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db);


// setDoc(doc(db,"products","myid1001"),{
//     name:"deedo",
//     type:"food",
//     price:300
// });


setDoc(doc(db,"products","myid1001"),{
    name:"cocacola",
    type:"food",
    price:300
}).then(()=>{
     console.log("Update Successfully");
})
.catch(error=>{
    console.log(error)});



// => Before Merge

//=>After Merge