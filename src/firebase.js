import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDNZqFJN9yA1UWBwuPdIeC-aESKCPPlScQ",
  authDomain: "netflixclone-001-bd339.firebaseapp.com",
  projectId: "netflixclone-001-bd339",
  storageBucket: "netflixclone-001-bd339.firebasestorage.app",
  messagingSenderId: "59106711035",
  appId: "1:59106711035:web:5dadd5fd26da34c55ca75e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      EmailAuthProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
