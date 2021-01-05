import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBys5sCBJAGSoEtZVWAdTWs8v8E20H2Ic",
  authDomain: "tik-tok-59ab9.firebaseapp.com",
  projectId: "tik-tok-59ab9",
  storageBucket: "tik-tok-59ab9.appspot.com",
  messagingSenderId: "366738879181",
  appId: "1:366738879181:web:08895adf2f2fd5d3a56f84"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
