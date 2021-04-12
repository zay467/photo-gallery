import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCQoFbHtSGMqS6VixWWxCUCRLTcf5Op3Fw",
  authDomain: "photo-gallery-d8eed.firebaseapp.com",
  projectId: "photo-gallery-d8eed",
  storageBucket: "photo-gallery-d8eed.appspot.com",
  messagingSenderId: "984663900748",
  appId: "1:984663900748:web:342ecd69006d1c1ad56ae9",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
