import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_FIREBASE,
  authDomain: "expenses-39558.firebaseapp.com",
  projectId: "expenses-39558",
  storageBucket: "expenses-39558.appspot.com",
  messagingSenderId: "1024891116881",
  appId: "1:1024891116881:web:e1f0505e99489563f00770"
}

initializeApp(firebaseConfig)

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export const db = getFirestore()
