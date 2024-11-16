
import * as firebase from 'firebase/app';

 // Import other necessary modules as needed

const firebaseConfig = {
  apiKey: "AIzaSyCvHE6RRWusJ8WM9GjPDNi-c94glKsR7-0",
  authDomain: "juan-social.firebaseapp.com",
  projectId: "juan-social",
  storageBucket: "juan-social.firebasestorage.app",
  messagingSenderId: "813350404772",
  appId: "1:813350404772:web:34b7aedbf31f77c2855c31",
  measurementId: "G-QCSLW4WYN7",
  hosting: {
    // ... other hosting configuration
    allowedOrigins: ['http://localhost:3000'] // Add your local development URL
  }
};

firebase.initializeApp(firebaseConfig);

export default firebase;
