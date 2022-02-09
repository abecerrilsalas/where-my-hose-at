// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
// const analytics = getAnalytics(app);

// custom hook to return currentUser object
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// profile picture upload to Storage
export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage, currentUser.uid);

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});

  setLoading(false);
  alert("Upload file!");

}

// get listings
export const getListings = async () => {
  const listingsSnapshot = await getDocs(collection(db, "listings"));
  const listingsList = listingsSnapshot.docs.map((doc) => doc.data());
  return listingsList;
};


// useEffect (use side effect) takes function
// pass async function to useEffect that awaits getListings function
// inside 

//that function can call network, when gets result from firestore, it can call
//setState
//when ^ gets called, state gets updated, lets react re-render

//make card able to tkae an object that has title, object, descriptoin, and then you can pass them as props to card
// listings.map // turn landing section class into a flexbox that is horizontally
// gives cards a min width and let flexbox figure it out