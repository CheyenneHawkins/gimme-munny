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

    async function getDbInvoices(userID){
        // console.log("Fetching invoice list...")
        const q = query(collection(firestore, `users/${userID}/invoices`));
        const querySnapshot = await getDocs(q);
        // console.log("Got it")
        // invoicesToArray(querySnapshot);
        setuserInvoicesObject(querySnapshot);
    }

    //------gets invoices from db, stores it in state object
    useEffect(()=>{
            getDbInvoices(user.email);
            console.log("RAN EFFECT")
    }, [trigger])


    function invoicesToArray() {
        // console.log("<------------------->")
        if (userInvoicesObject != 'blank'){
            userInvoicesObject.forEach((doc)=> {
                tempArray.push([doc.id, doc.data()])
                // console.log(doc.id)
            }
            )
        } else {
            // console.log("EMPTY BABY!")
        }
        setUserInvoicesArray(tempArray)
        }

    //-------converts from object to array
    useEffect(()=>{
            invoicesToArray();
            // console.log("LIST OF INVOICES RAN")
    }, [userInvoicesObject])


    function testState() {
        setuserInvoicesObject(objectHolder)
    }


    const invoicelist = userInvoicesArray.map((item, index) => {
        const id = item[0];
        const recipient = item[1].data[0].recipient;
        const description = item[1].data[0].description;
        return <a href={`/preview?q=${id}`} key={index}><p>{description}</p></a>
        // return <p key={index}>{description}</p>
        });

    return (
        <>
        <CreateInvoiceStyle>
            <h1>INVOICES</h1>
           
            {invoicelist}
            
            <button type="button" onClick={()=>{
                invoicesToArray();
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