import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD9CYrZ9wdEY9GnC11aBhKvMn2fpI3erxo",
    authDomain: "login-f4d9e.firebaseapp.com",
    databaseURL: "https://login-f4d9e.firebaseio.com",
    projectId: "login-f4d9e",
    storageBucket: "login-f4d9e.appspot.com",
    messagingSenderId: "873331125077",
    appId: "1:873331125077:web:033726f90c4b16f7ac1ddc"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;