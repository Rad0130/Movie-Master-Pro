import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const provider=new GoogleAuthProvider();

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const signGoogle=()=>{
        setLoading(true);
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
        loading,
        setLoading,
    }
    return (
        <div>
            <AuthContext value={AuthData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;