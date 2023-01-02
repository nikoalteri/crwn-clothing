import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPGA6ViGILV_cJsJlqvHJ5fc_mdSJ833E",
  authDomain: "crwn-clothing-db-63caa.firebaseapp.com",
  projectId: "crwn-clothing-db-63caa",
  storageBucket: "crwn-clothing-db-63caa.appspot.com",
  messagingSenderId: "792352624303",
  appId: "1:792352624303:web:8118a309d7c454f9518e5a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
