import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvyaP52CkvzCnMod1HOLAOWXelWp-ghsA",
  authDomain: "tradingcards-8363b.firebaseapp.com",
  projectId: "tradingcards-8363b",
  storageBucket: "tradingcards-8363b.appspot.com",
  messagingSenderId: "668460713",
  appId: "1:668460713:web:4e25d37cccb3af261cebb8",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
export const DB = getFirestore(FIREBASE_APP);
