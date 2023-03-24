// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHXHtjVMdV6Kh8Wu23rfxOPksgroGPwY",
  authDomain: "bazar-app-40484.firebaseapp.com",
  projectId: "bazar-app-40484",
  storageBucket: "bazar-app-40484.appspot.com",
  messagingSenderId: "1789343069",
  appId: "1:1789343069:web:9c20f4453e58740c01a4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
