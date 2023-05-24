// Initialize the firebase instance
import { initializeApp } from "firebase/app";

//Initialize the Google Authentication // All Auth Method
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//Initialize the Google firestore-db // All firestore-db Method
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKK76ifzOmOnS2eOkfEgbbVHoD1ZHHTt0",
  authDomain: "omnifoods-8b489.firebaseapp.com",
  projectId: "omnifoods-8b489",
  storageBucket: "omnifoods-8b489.appspot.com",
  messagingSenderId: "428162809982",
  appId: "1:428162809982:web:db31c516e1ec505087982f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

//Set out Google Authentication behave
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Creating an authentication instance
export const auth = getAuth();

// Exporting the Google sign in pop-up
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Exporting the Google Redirect sign in
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//Initialize google firestore database
export const db = getFirestore();

// Function that set User Document Reference
export const createUserDocFromAuth = async (
  userAuth,
  addtionalInformation = {}
) => {
  if (!userAuth) return;

  //Get user document reference from Google auth Popup
  const userDocRef = doc(db, "users", userAuth.uid);

  //Get the snapShot of the user document
  const userSnaphot = await getDoc(userDocRef);

  //Check if the user does not exists // for the signup User
  if (!userSnaphot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log("users does not exist", error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
