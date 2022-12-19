import { useEffect, useState } from 'react';
import { UserAuth, logOut } from "./contexts/AuthContext"
import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow, FormTo, Main } from './Style';
import arrow from '../images/circle-arrow.png'
import deleteicon from '../images/delete-icon.png'
import { createInvoiceDbEntry } from './firebase';
import { useNavigate } from "react-router-dom";



export default function CreateInvoice() {
    
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    
    //object to store invoiceData fields
    const invoiceRowFields = 
    (row)=>{
        return ({row: row, description: '', rate: '', quantity: '', subtotal: '', total: '', recipient: ''})
    };

    //------STATES-------//
    const [invoiceData, setInvoiceData] = useState([
        invoiceRowFields(1),
    ]);
    const [rows, setRows] = useState(['row']);
    const [invoiceTotal, setInvoiceTotal] = useState();
    const [trigger, setTrigger] = useState(false);

    // useEffect(()=>{
    //     renderRows();
    // }, [invoiceData]) 

    //prints invoiceData on each change
    useEffect(()=>{
        console.clear();
        console.table(invoiceData);
    }, [invoiceData])


    function updateRowValues(field) {
        setInvoiceData(state => 
            state.map((index, count) => {
                return {...index, [field]: count};
        })
    )
    }

    function updateInvoiceData(field, value, row) {
        setInvoiceData(data =>
            data.map((index, count) => {
            if (index.row === row){
                return {...index, [field]: value};
            } else {
                return index
            }
        }))
    }

    function updateSubtotal(field, row) {
        setInvoiceData(state =>
            state.map(index => {
                if (index.row === row){
                    return {...index, [field]: index.rate * index.quantity};
                }
            return index
        }))
    }

    function runTotal() {
        let totalAmount = 0;
        invoiceData.map(
            index => {
                totalAmount += index.subtotal
                return totalAmount
            }
        )
        return totalAmount
    }

    function addInvoiceDataRow() {
        const rowField = (invoiceData.length+1);
        invoiceData.push(invoiceRowFields(rowField));
        console.table(invoiceData)
    }

    function deleteRow(index){
        console.log('DELETING THIS:')
        console.table(invoiceData[index])
        const newData = invoiceData.splice(index, 1);
        console.table(newData)
        // setInvoiceData(...invoiceData, newData)
        console.table('UDATED INVOICE DATA:')
        console.table(invoiceData)
        updateRowValues('row');
        setTrigger(true)
    }

    function renderRows(){
        const fields =
            invoiceData.map((row, index)=>{
                return (
                    <FormRow key={index} id={`formrow${index}`}>
                        {invoiceRow(index+1)}
                    </FormRow>
            )
        });
        return fields
    }


    const invoiceRow = (rowNum)=> {
        return (
            <>
                <fieldset>
                    <input type="text" value={`${invoiceData[rowNum-1].description}`} placeholder="Description of item or service" onChange={(e)=>{
                        const value = e.currentTarget.value;
                        updateInvoiceData('description', value, rowNum)
                        }   //onChange closer
                        }/>     
                </fieldset>
                <fieldset className=''>
                {//-------------RATE---------------------}
                }
                    <input type="number" value={`${invoiceData[rowNum-1].rate}`} placeholder="$/hr" onChange={(e)=>{
                        const value = e.currentTarget.value;
                        updateInvoiceData('rate', value, rowNum)
                        updateSubtotal('subtotal', rowNum)
                        // if (row1.quantity >= 1) {
                        //     row1.subtotal = row1.quantity * e.currentTarget.value;
                        // };
                        }}/>
                </fieldset>
                {//-------------QTY---------------------}
                }                            
                <fieldset className='borderright'>
                    <input type="number"  value={`${invoiceData[rowNum-1].quantity}`} placeholder='"5"' onChange={(e)=>{
                        const value = e.currentTarget.value;
                        updateInvoiceData('quantity', value, rowNum)
                        updateSubtotal('subtotal', rowNum)
                        }}/>
                </fieldset>
                {//-------------SUBTOTAL---------------------}
                }                            
                <fieldset>
                    <h3>$ {invoiceData[rowNum-1]?.subtotal > 0 && (invoiceData[rowNum-1].subtotal)}</h3>
                </fieldset>
                <fieldset>
                    <p>
                        <button type='button' onClick={(e)=>{
                            e.preventDefault();
                            deleteRow(rowNum-1);
                        }}>
                            {/* {rowNum != 1 && 'delete'} */}
                            {rowNum != 1 && <img src={deleteicon} height={20} />}
                        </button>
                    </p>
                </fieldset>
            </>
                )
    }

    async function makeInvoice(e){
        e.preventDefault();
        const date = new Date;
        let newDate = '';
        function formatDate(date, format) {
            const map = {
                mm: date.getMonth() + 1,
                dd: date.getDate(),
                yy: date.getFullYear().toString().slice(-2),
                yyyy: date.getFullYear()
            }
            return (`${map.mm}-${map.dd}-${map.yy}`)
        }
        const dateFormat = formatDate(date, newDate);
        const userName = user.email;
        const docName = `${dateFormat}_${invoiceData[0].recipient.replace(/ /g, "-")}-${runTotal()}`;
        const wrappedInvoice = {data: invoiceData}
        // updateInvoiceData('id', docName, 1)
        await createInvoiceDbEntry(userName, docName, wrappedInvoice);
        navigate(`/preview?q=${docName}`)
    }


    return (
        <Main>
                <h1 className='center'>CREATE INVOICE</h1>
            <CreateInvoiceStyle>
                <FormStyle>
                <FormTo>
                        <h2>To:</h2>
                        <input type="text" onChange={(e)=>{
                            const value = e.currentTarget.value;
                            updateInvoiceData('recipient', value, 1)
                            }}/>
                </FormTo>
                    <div id="rowholder">
                            <FormRow id="formlabels">
                                <fieldset>
                                    <label>Description</label>  
                                </fieldset>
                                <fieldset className=''>
                                    <label>Rate</label>
                                </fieldset>                       
                                <fieldset className='borderright'>
                                    <label>Qty</label>
                                </fieldset>                        
                                <fieldset>
                                    <label className='scoot'>Subtotal</label>
                                </fieldset>
                                <fieldset></fieldset>
                            </FormRow>

                {//-------------------------------------------------}
                //-------------------ROW GENERATOR---------------------}
                    }        
                        {renderRows()}   


                    </div>

                    <button type="button" onClick={()=>{
                        addInvoiceDataRow();
                        setRows([...rows, 'row'])
                        }}>+</button>
                    <TotalRow>
                        <div></div>
                        <div></div>
                        <h1>TOTAL:</h1>
                        <h1 className='textalignleft'>
                        $ {runTotal()}
                        </h1>
                        <div className='goarrow'>
                        <button type="submit" onClick={(e)=> {
                            makeInvoice(e);
                            }}>
                            <img src={arrow} height={60}/>
                        </button>
                        </div>
                    </TotalRow>
                </FormStyle>
            <button type="button" className="" onClick={()=>{
                console.table(invoiceData)
                }}>INVOICE DATA</button>
            <br/>
            <button type="button" className="" onClick={()=>{
                console.table(rows)
                }}>CONSOLE ROWS</button>
            <br/>
            <button type="button" className="" onClick={()=>{
                addInvoiceDataRow();
                }}>CHECK ADD INVOICE DATA</button>
            <br/>
            <button type="button" className="" onClick={()=>{
                navigate(`/preview?q=butts`)
                }}>PREVIEW</button>
            </CreateInvoiceStyle>
        </Main>
    )


}