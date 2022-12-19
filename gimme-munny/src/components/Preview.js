import { UserAuth, logOut } from "./contexts/AuthContext"
import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow, FormTo, InvoicePreviewStyle } from './Style';
import { query, collection, getDocs, getDoc, doc} from "firebase/firestore"
import { firestore } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import wait from 'waait';
import styled from 'styled-components';

const Title = styled.div`
    text-align: center;

`

const PayableSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 130px;
    /* align-items: flex-end; */
    & h3 {
        margin: 0px;
        padding: 0px;
    }
    & p {
        margin: 0px;
        padding: 0px 0px 0px 7px;
    }

    & > * {
        /* border: green solid 1px; */
    }
    `

const DetailsHeadings = styled.div`
    display: grid;
    grid-template-columns: 360px 60px 60px 70px;
    height: 55px;
    margin: 0px 10px;
    /* border: purple solid 1px; */
    h4 {
        border-bottom: black solid 2px !important;
        /* border: purple solid 1px; */
    }
`

const DetailsTotal = styled.div`
    /* display: grid; */
    /* grid-template-columns: 380px 60px 60px 70px; */
    height: 55px;
    text-align: right;
    padding-left: 30px;
    margin-left: 10px;
    margin-top: 30px;
    width: 90%;
    /* margin-bottom: 0px; */
    /* border: purple solid 1px; */
    border-top: black solid 1px !important;
    h4 {
        /* border: purple solid 1px; */
    }
`

const DetailsListing = styled.div`
    display: grid;
    grid-template-columns: 360px 60px 60px 70px;
    grid-template-rows: 40px;
    margin: 0px 10px;
    padding-top: 0px;
    & p {
        margin-top: 0px;
        padding-top: 0px;
        font-weight: 400;
    }
    & > * {
        /* border: green solid 1px; */
    }
    `


export default function Preview() {
    const { user, logOut } = UserAuth();
    
    const [invoicePreview, setInvoicePreview] = useState('');
    
    const [userInfo, setUserInfo] = useState();
    const [trigger, setTrigger] = useState('');
    
    const urlParams = new URLSearchParams(window.location.search);
    
    // const userID = user.email;

    let snapHolder = '';

    // async function getUserInfo() {
    //     // await wait(1000);
    //     const docRef = doc(firestore, "users", user.email);
    //     const docSnap = await getDoc(docRef);
    //     snapHolder = docSnap?.data();
    //     setUserInfo({...userInfo, snapHolder});
    //     console.log("----user info GOT IT----")
    // }

    
    async function getUserInfo(userID) {
        console.log("USERINFO STATE:")
        console.log(userInfo)
        console.log("USERID:")
        console.log(userID)
        const docRef = doc(firestore, "users", userID);
        const docSnap = await getDoc(docRef);
        setUserInfo(docSnap.data());
        console.log("DOCSNAP:");
        console.log(docSnap.data());
    }

    useEffect(()=>{
        console.log("EFFECT - USER IS:")
        console.log(user)
        if (user.email){
            getUserInfo(user.email);
        } else {
            console.log("Waiting for user info...")
        }
    }, [user])

    const emptyCheck = {};


    async function getInvoice(invoiceId){
        const docRef = doc(firestore, `users/${user.email}/invoices`, `${invoiceId}`);
        const docSnap = await getDoc(docRef);
        const previewHolder = docSnap?.data().data[0];
        setInvoicePreview(previewHolder)
        console.log("No such document!");
    }

    //------gets invoice from databse, saves into array
    useEffect(()=>{
        async function getPreviewData() {
            await getInvoice(`${urlParams.get('q')}`);
            // setInvoicePreview(...invoicePreview, docSnap.data().data[0])
            console.log("Got it")
        };
        // console.log("Getting data...")
        if (user.email){
            getPreviewData();
        } else {
            console.log("Waiting for user info...")
        }
            }, [user])
            


    function formatDisplayDate() {
        const date = new Date;
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear()
        }
        return (`${map.mm}/${map.dd}/${map.yy}`)
    }

    function formatUrlDate() {
        const date = new Date;
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear()
        }
        return (`${map.mm}-${map.dd}-${map.yy}`)
    }

    const date = formatDisplayDate();
    const urlDate = formatUrlDate();

    const venmoAccount = "B";
    const note = "W";
    // const venmoAccount = userInfo?.venmo.slice(1);
    // const note = invoicePreview.description.replace(' ', "+");
    const total = invoicePreview.subtotal;
    const venmoPayLink = `https://venmo.com/?txn=pay&recipients=${venmoAccount}&amount=${total}&note=${urlDate}+${note}`;

    return (
        <>
        <CreateInvoiceStyle>
            <h1>PREVIEW</h1>
            <InvoicePreviewStyle>
                <h1>INVOICE</h1>
                <PayableSection>
                <div className='invoiceto'>
                    <h4>
                        {date}
                    </h4>
                    <h4></h4>
                    <h4>To: </h4>
                    <h4 className='normalweight'>
                        {invoicePreview?.recipient}
                    </h4>
                </div>
                <div className='invoicefrom'>
                    <p>
                        {userInfo?.name}
                    </p>
                    <p>
                        {userInfo?.phone}
                    </p>
                    {/* <p>
                        {userInfo?.address.street}
                    </p>
                    <p>
                        {userInfo?.address.city}, {userInfo?.address.state}, {userInfo?.address.zip} 
                    </p> */}
                    {/* <p>&nbsp;</p> */}
                </div>

                </PayableSection>
                <div>
                    <DetailsHeadings>
                        <h4>
                            Description
                        </h4>
                        <h4 className='centertext'>
                            Rate
                        </h4>
                        <h4 className='centertext'>
                            Qty
                        </h4>
                        <h4 className='centertext'>
                            Subtotal
                        </h4>
                    </DetailsHeadings>
                    <DetailsListing>
                        <p>
                            {invoicePreview?.description}
                        </p>
                        <p className='centertext'>
                            ${invoicePreview?.rate}/hr
                        </p>
                        <p className='centertext'>
                            {invoicePreview?.quantity}
                        </p>
                        <p className='centertext'>
                            ${invoicePreview?.subtotal}
                        </p>
                    </DetailsListing>
                    <DetailsTotal>
                        <h4>
                            AMOUNT DUE:&nbsp;&nbsp; ${invoicePreview?.subtotal}
                        </h4>
                        <h4>
                            VENMO: 
                            <a href={venmoPayLink} target="_blank">&nbsp;&nbsp;
                            {userInfo?.venmo}
                            </a>
                        </h4>
                        <button type="button" onClick={()=> {console.log(venmoPayLink)}}>VENMO LOG</button>
                    </DetailsTotal>
                </div>

            </InvoicePreviewStyle>

            <div className='bottomer'>
                <button type="button" onClick={()=>{
                    // getInvoice('12-15-22_Chartruese-75')
                    console.log("EMPTY OBJECT LOOKS LIKE:")
                    console.log(emptyCheck)
                }}>LOG</button>
                <br/>
                <button type="button" onClick={()=>{
                    console.log(invoicePreview)
                }}>INVOICE PREVIEW OBJ</button>
                <button type="button" onClick={()=>{
                    console.log("USERINFO STATE BUTTON:")
                    console.log(userInfo)
                }}>USER INFO LOG</button>
                <button type="button" onClick={()=>{
                    console.log("USER ID BUTTON:")
                    console.table(user.email)
                }}>USER.EMAIL</button>
            </div>
        </CreateInvoiceStyle>
        </>
    )


}