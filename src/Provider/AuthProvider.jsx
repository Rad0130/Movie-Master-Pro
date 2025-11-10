import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const provider=new GoogleAuthProvider();

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const signGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    const updateUser=(updated)=>{
        return updateProfile(auth.currentUser,updated);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    const AuthData={
        createUser,
        signInUser,
        user,
        logOut,
        signGoogle,
        updateUser,
        setUser,
    }
    return (
        <div>
            <AuthContext value={AuthData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;