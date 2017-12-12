import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyC7UVCGkJxyYapHN98EbxzUqeg5l-VBLlM",
  authDomain: "yipsit-80c51.firebaseapp.com",
  databaseURL: "https://yipsit-80c51.firebaseio.com",
  projectId: "yipsit-80c51",
  storageBucket: "yipsit-80c51.appspot.com",
  messagingSenderId: "1077017290500"
};
var fire = firebase.initializeApp(config);
export default fire;
