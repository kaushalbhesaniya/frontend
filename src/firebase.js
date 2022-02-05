import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhNnagfXl9NXHjjzNSMrK5SwAbJWIvGzw",
  authDomain: "ecommerce-8fc72.firebaseapp.com",
  projectId: "ecommerce-8fc72",
  databaseURL: "https://ecommerce-8fc72.firebaseapp.com",
  storageBucket: "ecommerce-8fc72.appspot.com",
  messagingSenderId: "705242461665",
  appId: "1:705242461665:web:47af156fb0cd49d6020ea0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
