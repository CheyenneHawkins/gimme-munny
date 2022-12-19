import { useState } from "react";
import { AuthFormStyle, SignInStyle } from "./Style";
import { UserAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import wait from "waait";
import { auth, writeUserDbEntry, experimentEntry,  } from "./firebase";

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {createUserEmail, user, logOut} = UserAuth();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        console.log(e.type);
        let userId = '';
        try{
            createUserEmail(email, password).then(async (response)=>{
                console.log(response.user.uid)
                userId = response.user.uid;
                console.log("Account created...");
                await createUserDbEntry(email);
                console.log("DB created...");
                await wait(1000);
                navigate('/account');
            }).catch((error) => {
                console.log(error)
            });
        } catch (e){
            setError(e.message)
            console.log(e.message)
        }

    }

    function createUserDbEntry(userID){
        const dataGroup = {
            name: `${name}`,
            email: `${email}`,
            phone: '',
            invoices: [],
            userId: userID,
            address: {street: '', city: '', state: '', zip: ''},
            venmo: ''
            }
        writeUserDbEntry(userID, dataGroup);
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
            <h1>SIGN UP</h1>
            <AuthFormStyle>
                <fieldset>
                    <label>Name</label>
                    <input type="text" onChange={(e)=> {
                        setName(e.currentTarget.value)
                    }}/>
                    <label>Email</label>
                    <input type="email" onChange={(e)=> {
                        setEmail(e.currentTarget.value)
                    }}/>
                    <label>Password</label>
                    <input type="password" onChange={(e)=> {
                        setPassword(e.currentTarget.value)
                    }}/>
                    <button type="button" onClick={handleSubmit} disabled={loading} >Create Account</button>
                </fieldset>   
                {/* <button type="button" onClick={()=> {console.log(email, password)}}>LOG IT</button> */}
                <button type="button" onClick={()=> {logOutButton()}}>LOG OUT</button>
            </AuthFormStyle>
        </SignInStyle>
        
        </>

    )

}