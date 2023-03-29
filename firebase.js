import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBSfN8uXlOdwAIDJz-qirzEy__ptrRRKjI",
  authDomain: "pesbuk-clone.firebaseapp.com",
  projectId: "pesbuk-clone",
  storageBucket: "pesbuk-clone.appspot.com",
  messagingSenderId: "709902141088",
  appId: "1:709902141088:web:b81d94df5d8de268036bc5",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const simpanan = getStorage();

export { db, simpanan };
