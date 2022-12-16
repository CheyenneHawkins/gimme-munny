import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow, FormTo } from './Style';
import { query, collection, getDocs, getDoc} from "firebase/firestore"
import { firestore } from './firebase';
import { UserAuth, logOut } from "./contexts/AuthContext"
import { useState } from 'react';
import { useEffect } from 'react';


export default function Invoices() {
    const { user, logOut } = UserAuth();

    const [userInvoicesObject, setuserInvoicesObject] = useState('blank');
    const [userInvoicesArray, setUserInvoicesArray] = useState([]);
    const [trigger, setTrigger] = useState('');
    const arrayHolder = ['butts', 'boobs', 'big kisses'];
    const objectHolder = {'good': 'butts', 'great': 'boobs', 'yep': 'big kisses'};
    const tempArray = [];

    useEffect(()=>{
            getInvoiceListHere(user.email);
            console.log("RAN EFFECT")
    }, [trigger])

    async function getInvoiceListHere(userID){
        console.log("Fetching invoice list...")
        const q = query(collection(firestore, `users/${userID}/invoices`));
        const querySnapshot = await getDocs(q);
        console.log("Got it")
        // listOfInvoices(querySnapshot);
        setuserInvoicesObject(querySnapshot);
    }

    function testState() {
        setuserInvoicesObject(objectHolder)
    }

    function listOfInvoices() {
        const theInvoiceArray =
          userInvoicesArray.map((item, index) => {
            return <p key={index}>{item}</p>
        });
        return theInvoiceArray
        }
    
    function tryItArray() {
        const theArray =
          arrayHolder.map((item, index) => {
            return <p key={index}>{item}</p>
        });
        return theArray
    } 

    function tryItObject(){
        const theObject = Object.values(objectHolder) ;
        return theObject

        // console.log(objectHolder)
    }

    const invoicelist = userInvoicesArray.map((item, index) => {
        return <p key={index}>{item}</p>
        });

    return (
        <>
        <CreateInvoiceStyle>
            <h1>INVOICES</h1>

            {/* {tryItArray()} */}
            {/* {listOfInvoices()} */}
            
            {invoicelist}
            
            <button type="button" onClick={()=>{
                console.log("<------------------->")
                // setuserInvoicesArray([]);
                if (userInvoicesObject != 'blank'){
                    userInvoicesObject.forEach((doc)=> {
                        tempArray.push(doc.id)
                        console.log(doc.id)
                        // console.log("<Here?>")
                        // console.log(doc.ref)
                        // console.log(doc.data().data[0].recipient)
                    }
                    )
                    // console.log(Object.keys(userInvoicesObject));
                } else {
                    console.log("EMPTY BABY!")
                }
                setUserInvoicesArray(tempArray)
            }}>USER INVOICES STATE</button>
            <br/>
            <button type="button" onClick={()=>{
               console.log(userInvoicesArray)
            }}>INVOICES ARRAY LOG</button>
            <br/>
            <button type="button" onClick={()=>{
               console.log(userInvoicesObject)
            }}>INVOICES OBJ LOG</button>
            <br/>
            <button type="button" onClick={()=>{
                console.log(testState());
                // console.log(userInvoicesObject)
            }}>UPDATE STATE</button>
        </CreateInvoiceStyle>
        </>
    )


}