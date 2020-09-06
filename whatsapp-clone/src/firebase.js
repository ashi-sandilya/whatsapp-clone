import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlE8M4gCzUl6Z9Bby96RgS6J2Pc8azwe0",
    authDomain: "whats-app-clone-e9269.firebaseapp.com",
    databaseURL: "https://whats-app-clone-e9269.firebaseio.com",
    projectId: "whats-app-clone-e9269",
    storageBucket: "whats-app-clone-e9269.appspot.com",
    messagingSenderId: "741573464466",
    appId: "1:741573464466:web:f67655c4a96d23be96714b",
    measurementId: "G-0GVP905WCG"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 