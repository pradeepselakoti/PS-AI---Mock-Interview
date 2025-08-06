import { initializeApp, getApp , getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzcYxBNzzawxVxSeSlrWCN_d10q3_t0Nw",
  authDomain: "prepwise-30a5f.firebaseapp.com",
  projectId: "prepwise-30a5f",
  storageBucket: "prepwise-30a5f.firebasestorage.app",
  messagingSenderId: "104314747845",
  appId: "1:104314747845:web:77a4c0fddfbe927dcca9ac",
  measurementId: "G-JVQJX0P6CR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)