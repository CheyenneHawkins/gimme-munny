import { signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth, firestore } from "../firebase";

const UserContext = createContext();

export function AuthContextProvider( {children} ) {
    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    
    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth)
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe();
        }
        },)

    return (
        <UserContext.Provider value={{ createUserEmail, user, logOut }}>
            {children}
        </UserContext.Provider>
    ) 

}

export const UserAuth = ()=> {
    return useContext(UserContext)
}