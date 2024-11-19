import {initializeApp, getApps, getApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCSs7uNTmoUNePRd1YB8XKzZJ_DlJJzrU8',
  authDomain: 'findyourdrink-310df.firebaseapp.com',
  databaseURL: 'https://findyourdrink-310df-default-rtdb.firebaseio.com',
  projectId: 'findyourdrink-310df',
  storageBucket: 'findyourdrink-310df.appspot.com',
  messagingSenderId: '810010621968',
  appId: '1:810010621968:web:bf6aaf4dfb6608f9a2b295',
  measurementId: 'G-SNPFYM0VEN',
};

// Inisialisasi Firebase App dengan pengecekan
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Inisialisasi Auth dengan AsyncStorage
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

// Inisialisasi Firestore
const firestore = getFirestore(app);

// Inisialisasi Real-time Database
const database = getDatabase(app);

// Fungsi untuk membuat akun
const createAccount = async user => {
  try {
    const {user: createdUser} = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    console.log('User created:', createdUser);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('The email address is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      alert('The email address is invalid.');
    } else if (error.code === 'auth/weak-password') {
      alert('The password must be at least 6 characters long.');
    } else {
      alert('Create account failed: ' + error.message);
    }
    console.error('Create account failed:', error.message);
  }
};

// Fungsi untuk login
const login = async (user, successCallback, errorCallback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const loggedInUser = userCredential.user;
    successCallback(loggedInUser);
  } catch (error) {
    errorCallback(error);
  }
};

export {app, auth, firestore, database, createAccount, login};
