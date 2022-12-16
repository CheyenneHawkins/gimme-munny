import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore, doc, setDoc, addDoc, collection, getDocs, query } from "firebase/firestore";



const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,

  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const firestore = getFirestore(app);


export function writeUserDbEntry(userID, docData) {
  const userSpot = doc(firestore, `users/${userID}`)
  setDoc(userSpot, docData);
}

export function createInvoiceDbEntry(userID, docName, docData) {
  const userSpot = doc(firestore, `users/${userID}/invoices/${docName}`)
  setDoc(userSpot, docData);
}

export function modUserDbEntry(userID, docData) {
  const userSpot = doc(firestore, `users/${userID}`)
  setDoc(userSpot, docData, {merge: true});
}

export function createWeatherMessage(userIDrando, docData) {
  const userSpot = doc(firestore, `messages/${userIDrando}`)
  setDoc(userSpot, docData);
}

export async function getInvoiceList(userID, list){
  console.log("LOOKING...")
  const q = query(collection(firestore, `users/${userID}/invoices`));
  const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   list.push(doc.data());
  // });
  console.log(querySnapshot)
  // return invoiceList
}

//alias firebase="`npm config get prefix`/bin/firebase"

//firebase deploy --only functions

//firebase emulators:start --only functions

//firebase deploy --only firestore:rules