import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth, logOut } from "./contexts/AuthContext"
import { auth, writeUserDbEntry, experimentEntry, firestore } from "./firebase";
import { SignInStyle } from "./Style";
import spinner from "../images/Spinner-1s-200px.gif"


export default function Settings() {
    const { user, logOut } = UserAuth();

    const [userInfo, setUserInfo] = useState();

    const navigate = useNavigate();


    async function getUserInfo() {
        const docRef = doc(firestore, "users", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUserInfo(docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No logged in user");
        }
    }

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            getUserInfo()
            return () => { ignore = true; }
        }},[]);

    function handleClick(e){
        console.log(user)
        // createUserDbEntry(user.uid);
    }

    async function logOutButton(){
        try {
            await logOut();
            navigate('/');
        } catch (e) {
            console.log(e.message)
        }
        console.log("OK")
    }

    return (
        <>
        <SignInStyle>
        {userInfo == null && (
            <img src={spinner} alt='loading'/>
        )}
        {userInfo != null && (
        <>
            <h1>SETTINGS</h1>
            <h2>{userInfo != null && (userInfo?.name || user.uid)}</h2>
            <h2>{user && (user.email || user.uid)}</h2>
            <button type="button" onClick={handleClick}>CONSOLE LOG</button>
            <br/>
            <button type="button" onClick={logOutButton}>LOGOUT</button>
            <br/>
            <button type="button" onClick={getUserInfo}>GET USER INFO</button>
            <br/>
            <button type="button" onClick={()=>{console.log(userInfo)}}>USER INFO</button>
        </>
        )}
        </SignInStyle>
        </>
    )


}