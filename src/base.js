import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_VxrWnWXt6RANpj9_ashIuU2wpGVh2Tc",
  authDomain: "fir-quiz-b51f8.firebaseapp.com",
  databaseURL: "https://fir-quiz-b51f8.firebaseio.com",
  projectId: "fir-quiz-b51f8",
  storageBucket: "fir-quiz-b51f8.appspot.com",
  messagingSenderId: "625682568928",
  appId: "1:625682568928:web:3c3587d92fb899e02aa285",
  measurementId: "G-V6K6DJ35W8",
});

export default app;
