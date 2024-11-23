import firebase from '../../firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import SignUpModal from '../components/SignUpModal';
import { useState } from 'react';


const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "https://juanssocial.onrender.com";



const handleFinishGoogle = async (googleEmail) => {
}



const handleGoogleSignIn = async () => {

  const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase.app)
  try {
    const result = await signInWithPopup(auth, provider);   
    const email = await result.user.email

    if(result.user){
        console.log('user exists')
        return email
    }
    else{
        console.log('user does not existt')
        handleFinishGoogle
    }
  

    // Handle successful sign-in (e.g., redirect to dashboard)
    console.log('User signed in:', result.user);
  } catch (error) {
    return err;
  }
}

export default  handleGoogleSignIn