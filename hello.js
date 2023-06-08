// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCfXdNpjwNjU_kUQPGabLaiLwFK4jc6mXA",
//   authDomain: "first-2d5b8.firebaseapp.com",
//   projectId: "first-2d5b8",
//   storageBucket: "first-2d5b8.appspot.com",
//   messagingSenderId: "919921283166",
//   appId: "1:919921283166:web:efb01680e12ed5498aa4cf",
//   measurementId: "G-6WP3D4149J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





//////////////////////////////////////////////////

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCfXdNpjwNjU_kUQPGabLaiLwFK4jc6mXA",
//   authDomain: "first-2d5b8.firebaseapp.com",
//   projectId: "first-2d5b8",
//   storageBucket: "first-2d5b8.appspot.com",
//   messagingSenderId: "919921283166",
//   appId: "1:919921283166:web:f90556c3c055e2ac8aa4cf",
//   measurementId: "G-K2ZGV1PS4Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


/////////////////////////////////////////////////////////


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbyxIYYrgO6phEFg7fzWFs7WgHHBclRaA",
  authDomain: "image-upload-7f3ce.firebaseapp.com",
  projectId: "image-upload-7f3ce",
  storageBucket: "image-upload-7f3ce.appspot.com",
  messagingSenderId: "617380055592",
  appId: "1:617380055592:web:d6c9027d46dffdc08c831d",
  measurementId: "G-G8TFYG9BHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//////


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
