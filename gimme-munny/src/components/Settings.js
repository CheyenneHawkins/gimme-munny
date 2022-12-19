import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth, logOut } from "./contexts/AuthContext"
import { auth, writeUserDbEntry, experimentEntry, firestore, modUserDbEntry } from "./firebase";
import { SignInStyle, SettingsStyle, SettingsRow, FormStyle, FormRow, Main } from "./Style";
import spinner from "../images/Spinner-1s-200px.gif"
import pencil from "../images/pencil.png"
import check from "../images/check.png"
import cancel from "../images/cancelred.png"


export default function Settings() {
    const { user, logOut } = UserAuth();

    const [userInfo, setUserInfo] = useState();
    const [rowClass, setRowClass] = useState({name: 'display', phone: 'display', street: 'display', city: 'display', state: 'display', zip: 'display'});
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');

    const navigate = useNavigate();

    //gets user info from firebase, saves it in state
    async function getUserInfo() {
        const docRef = doc(firestore, "users", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUserInfo(docSnap.data());
        console.log("-----Grabbed user info----")
        } else {
        // doc.data() will be undefined in this case
        console.log("No logged in user");
        }
    }

    useEffect(() => {
        // let ignore = false;
        // if (!ignore) {
            getUserInfo()
            // return () => { ignore = true; }
        // }
    },[]);

    function handleClick(e){
        // console.log(user)
        // createUserDbEntry(user.uid);
        modUserDbEntry();
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

    function viewEditField(field){
        console.log(`EDIT ${field}`)
        const nameInput = document.getElementById(`edit-${field}`);
        const nameDisplay = document.getElementById(`display-${field}`);
        nameInput.classList.remove('hide');
        nameDisplay.classList.add('hide');
    }
    
    function confirmEntry(field){
        console.log(`CONFIRM ${field}`)
    //----Flip from input back to display----
        const nameInput = document.getElementById(`edit-${field}`);
        const nameDisplay = document.getElementById(`display-${field}`);
        nameInput.classList.add('hide');
        nameDisplay.classList.remove('hide');
    //-----------------------------------
        updateDbField(field);
        console.log(`${field} UPDATED`)
        // getUserInfo();
    }

    async function updateDbField(field){
        let docData = '-';
        switch (field) {
            case 'name' : docData = {...userInfo, [field] : `${userInfo.name}`};
                break;
            case 'phone' : docData = {...userInfo, [field] : `${userInfo.phone}`};
                break;
            case 'venmo' : docData = {...userInfo, [field] : `${userInfo.venmo}`};
                break;
            default : docData = null;
        }
        // console.log(docData)
        await modUserDbEntry(user.email, docData)
        getUserInfo();
    }
    
    async function confirmAddressEntry(field){
        //----Flip from input back to display----
        const nameInput = document.getElementById(`edit-${field}`);
        const nameDisplay = document.getElementById(`display-${field}`);
        nameInput.classList.add('hide');
        nameDisplay.classList.remove('hide');
        //-----------------------------------
        const docData = {...userInfo};
        await modUserDbEntry(user.email, docData);
        getUserInfo();
    }

    function cancelEntry(field) {
        console.log(`CANCEL ENTRY`)
        const nameInput = document.getElementById(`edit-${field}`);
        const nameDisplay = document.getElementById(`display-${field}`);
        nameInput.classList.add('hide');
        nameDisplay.classList.remove('hide');
    }

//  http://localhost:3000/preview?q=12-18-22_Quentin-63
//  http://localhost:3000/preview?q=12-18-22_Quentin-63

    return (
        <>
        <Main>
                <h1 className="center">SETTINGS</h1>
            <SettingsStyle>
            {userInfo == null && (
                <img src={spinner} alt='loading'/>
            )}
            {userInfo != null && (
            <>
        {//------NAME---------------------------
        }
                <SettingsRow id="display-name">
                    <p>Name</p>
                    <h2 >{userInfo != null && (userInfo?.name)}</h2>
                    <button type="button" className='clear' onClick={(e)=> {
                        e.preventDefault()
                        viewEditField('name');
                        }}>
                        <img src={pencil} alt="edit name" height={20}/>
                    </button>
                </SettingsRow>
        {//-----------------NAME EDIT---------------------------
        }                
                <SettingsRow id="edit-name" className="hide">
                    <p>Name</p>
                    <input type="text" onChange={(e)=> {
                        e.preventDefault();
                        setUserInfo({...userInfo, name : e.currentTarget.value});
                        // setName(e.currentTarget.value);
                        console.log(userInfo.name)
                    }} placeholder={userInfo?.name}/>
                    <div className="acceptorcancel clear">
                        <button type="button" className="clear" onClick={(e)=> {
                            e.preventDefault()
                            confirmEntry('name');
                            }}>
                            <img src={check} alt="submit changes" height={20}/>
                        </button>
                        <button type="button" className="clear" onClick={()=> {
                            cancelEntry('name');
                            }}>
                            <img src={cancel} alt="cancel changes" height={20}/>
                        </button>
                    </div>
                </SettingsRow>

        {//------EMAIL---------------------------
        }
                <SettingsRow id="display-email">
                <p>Email</p>
                    <h2 >{userInfo != null && (userInfo?.email)}</h2>
                    <button type="button" className='clear' disabled={true} onClick={(e)=> {
                        e.preventDefault()
                        // viewEditField('email');
                        }}>
                        <img src={pencil} alt="edit email" height={20}/>
                    </button>
                </SettingsRow>
        {//-----------------EMAIL EDIT---------------------------
        }        
                <SettingsRow id="edit-email" className="hide">
                    <p>Email</p>
                    <input type="text" onChange={(e)=> {
                        // setEmail(e.currentTarget.value)
                    }} placeholder={userInfo?.email}/>
                    <div className="acceptorcancel clear">
                        <button type="button" className="clear" onClick={(e)=> {
                            e.preventDefault()
                            confirmEntry('email');
                            }}>
                            <img src={check} alt="submit changes" height={20}/>
                        </button>
                        <button type="button" className="clear" onClick={()=> {
                            cancelEntry('email');
                            }}>
                            <img src={cancel} alt="cancel changes" height={20}/>
                        </button>
                    </div>
                </SettingsRow>

        {//------PHONE---------------------------
        }
                <SettingsRow id="display-phone">
                <p>Phone</p>
                    <h2 >{userInfo != null && (userInfo?.phone || "(optional)")}</h2>
                    <button type="button" className='clear' onClick={(e)=> {
                        e.preventDefault()
                        viewEditField('phone');
                        }}>
                        <img src={pencil} alt="edit phone" height={20}/>
                    </button>
                </SettingsRow>
        {//-----------------PHONE EDIT---------------------------
        }                                        
                <SettingsRow id="edit-phone" className="hide">
                <p>Phone</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, phone : e.currentTarget.value});
                    }} placeholder={userInfo?.phone}/>
                    <div className="acceptorcancel clear">
                        <button type="button" className="clear" onClick={(e)=> {
                            e.preventDefault()
                            confirmEntry('phone');
                            }}>
                            <img src={check} alt="submit changes" height={20}/>
                        </button>
                        <button type="button" className="clear" onClick={()=> {
                            cancelEntry('phone');
                            }}>
                            <img src={cancel} alt="cancel changes" height={20}/>
                        </button>
                    </div>
                </SettingsRow>
        {//------ADDRESS---------------------------
        }
                <SettingsRow id="display-address">
                <p>Address</p>
                    <h2 >{(userInfo != null && userInfo?.address?.street != '') && (
                        `${userInfo.address?.street}, ${userInfo.address?.city} ${userInfo.address?.state} ${userInfo.address?.zip}` 
                        ) || (userInfo != null && userInfo.address?.street == '') && (
                        `(optional)` 
                        )}</h2>
                    <button type="button" className='clear' onClick={(e)=> {
                        e.preventDefault()
                        viewEditField('address');
                        }}>
                        <img src={pencil} alt="edit email" height={20}/>
                    </button>
                </SettingsRow> 
        {//-----------------ADDRESS EDIT---------------------------
        }                                      
                <SettingsRow id="edit-address" className="hide">
                <p>Address</p>
                <div className="addressblock">
                    <p>Street</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, address : {...userInfo.address, street : e.currentTarget.value}})
                    }} placeholder={userInfo?.address?.street}/>
                    <p>City</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, address : {...userInfo.address, city : e.currentTarget.value}})
                    }} placeholder={userInfo?.address?.city}/>
                    <p>State</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, address : {...userInfo.address, state : e.currentTarget.value}})
                    }} placeholder={userInfo?.address?.state}/>
                    <p>Zip</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, address : {...userInfo.address, zip : e.currentTarget.value}})
                    }} placeholder={userInfo?.address?.zip}/>
                </div>
                    <div className="acceptorcancel clear">
                        <button type="button" className="clear" onClick={(e)=> {
                            e.preventDefault()
                            confirmAddressEntry('address');
                            }}>
                            <img src={check} alt="submit changes" height={20}/>
                        </button>
                        <button type="button" className="clear" onClick={()=> {
                            cancelEntry('address');
                            }}>
                            <img src={cancel} alt="cancel changes" height={20}/>
                        </button>
                    </div>
                </SettingsRow>
                <hr />

        {//------VENMO---------------------------
        }
                <SettingsRow id="display-venmo">
                <p>Venmo</p>
                    <h2 >{userInfo != null && (userInfo?.venmo || "(optional)")}</h2>
                    <button type="button" className='clear' onClick={(e)=> {
                        e.preventDefault()
                        viewEditField('venmo');
                        }}>
                        <img src={pencil} alt="edit venmo" height={20}/>
                    </button>
                </SettingsRow>
        {//-----------------VENMO EDIT---------------------------
        }                                        
                <SettingsRow id="edit-venmo" className="hide">
                <p>Venmo</p>
                    <input type="text" onChange={(e)=> {
                        setUserInfo({...userInfo, venmo : e.currentTarget.value});
                    }} placeholder={userInfo?.venmo}/>
                    <div className="acceptorcancel clear">
                        <button type="button" className="clear" onClick={(e)=> {
                            e.preventDefault()
                            confirmEntry('venmo');
                            }}>
                            <img src={check} alt="submit changes" height={20}/>
                        </button>
                        <button type="button" className="clear" onClick={()=> {
                            cancelEntry('venmo');
                            }}>
                            <img src={cancel} alt="cancel changes" height={20}/>
                        </button>
                    </div>
                </SettingsRow>


                <div className="bottomer">
                    <button type="button" onClick={handleClick}>HANDLE CLICK</button>
                    <br/>
                    <button type="button" onClick={logOutButton}>LOGOUT</button>
                    <br/>
                    <button type="button" onClick={getUserInfo}>GET USER INFO</button>
                    <br/>
                    <button type="button" onClick={()=>{
                        console.log("userInfo:")
                        console.table(userInfo);
                        }}>LOG USER INFO</button>
                    <br/>
                    <button type="button" onClick={()=>{
                        // console.log(name)
                        // console.log(email)
                        // console.log(phone)
                        // console.log(address)
                        }}>LOG STATE</button>
                </div>
            </>
            )}
            </SettingsStyle>
        </Main>
        </>
    )


}