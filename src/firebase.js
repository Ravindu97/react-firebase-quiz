import firebase from "firebase";


const config = {
    apiKey: "AIzaSyB_VxrWnWXt6RANpj9_ashIuU2wpGVh2Tc",
    authDomain: "fir-quiz-b51f8.firebaseapp.com",
    databaseURL: "https://fir-quiz-b51f8.firebaseio.com",
    projectId: "fir-quiz-b51f8",
    storageBucket: "fir-quiz-b51f8.appspot.com",
    messagingSenderId: "625682568928",
    appId: "1:625682568928:web:3c3587d92fb899e02aa285",
    measurementId: "G-V6K6DJ35W8"
};

// initialize firebase

firebase.initializeApp(config);

export default firebase;