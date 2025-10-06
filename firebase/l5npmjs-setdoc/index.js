


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
//     name:"redbull",
//     type:"food",
//     price:2000
// });


// setDoc(doc(db,"products","myid1002"),{
//     name:"sponsor",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
//     console.log("Created Successfully");
//     console.log(docRef.id); //error
// })
// .catch(error=>{
//     console.log(error);
// });

// setDoc(doc(db,"products","myid1003"),{
//     name:"m150",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
  
//     console.log(docRef.id); //error
// })
// .catch(error=>{
//     console.log(error);
// });


setDoc(doc(collection(db,"products"),"myid1004"),{
    name:"firedragon",
    type:"food",
    price:1500
}).then(()=>{
    console.log("Created Successfully");
})
.catch(error=>{
    console.log(error);
});

setDoc(doc(collection(db,"products")),{
    name:"deedo",
    type:"food",
    price:500
}).then(()=>{
    console.log("Created Successfully");
})
.catch(error=>{
    console.log(error);
});