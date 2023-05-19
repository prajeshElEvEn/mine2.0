import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBbrsVSz6Q7_cnU6INu-TKJrxHuwCacfyg",
    authDomain: "mine-7f634.firebaseapp.com",
    projectId: "mine-7f634",
    storageBucket: "mine-7f634.appspot.com",
    messagingSenderId: "157489452148",
    appId: "1:157489452148:web:4818c04da1d0ed5831ed21",
    measurementId: "G-17P6B4YJJQ"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)

export {
    db,
    auth,
    storage,
    analytics
}
