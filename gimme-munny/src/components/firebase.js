import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";



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


export async function experimentEntry(){
  try {
    console.log(firestore)
    const docRef = addDoc(collection(firestore, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

// export function updateUserAuth(name) {
//   const updateInfo = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // Updates the user attributes:
//      user.updateProfile({ // <-- Update Method here
//        displayName: `${name}`,
//        photoURL: ""
//      }).then(function() {
//        console.log(user.displayName)
//      }, function(error) {
//        // An error happened.
//      });     

//    }
//   })
//   return ()=> {
//       updateInfo();
//   }
// }

export function writeUserDbEntry(userID, docData) {
  const userSpot = doc(firestore, `users/${userID}`)
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

//alias firebase="`npm config get prefix`/bin/firebase"

//firebase deploy --only functions

//firebase emulators:start --only functions

//firebase deploy --only firestore:rules