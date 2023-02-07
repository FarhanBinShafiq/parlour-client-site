import React, { createContext, useState } from "react";
import app from '../firebase/firebase.config'
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [loading, setLoading] = useState(true)

    //create account with email and password

    const createAccount = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(email, password)
    }

    //Log in with email

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }

    //Google
    const [signInWithGoogle] = useSignInWithGoogle(auth)


    ///Value 

    const authInfo = {
        signInWithGoogle, loading, signin, createAccount
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;