import { getApps, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASWtYcTWYIgaLziuu7GTPz7FCKZXxJmq4',
  authDomain: 'snacks-bari-557fb.firebaseapp.com',
  projectId: 'snacks-bari-557fb',
  storageBucket: 'snacks-bari-557fb.firebasestorage.app',
  messagingSenderId: '477881152471',
  appId: '1:477881152471:web:01d463ee6383a37b009192',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signUpWithEmail = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const signInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export { auth };
