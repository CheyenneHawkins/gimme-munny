import { useState } from "react";
import { AuthFormStyle, SignInStyle } from "./Style";
import { UserAuth } from "./contexts/AuthContext";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {createUserEmail} = UserAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        console.log(e.type);
        // try{
        //     await createUserEmail(email, password);
        // } catch (e){
        //     setError(e.message)
        //     console.log(e.message)
        // }

    }
    return (
        <>
        <SignInStyle>
            <h1>SIGN IN</h1>
            <AuthFormStyle>
                <fieldset>
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
                <button type="button" onClick={()=> {console.log(email, password)}}>LOG IT</button>
            </AuthFormStyle>
        </SignInStyle>
        </>

    )

}