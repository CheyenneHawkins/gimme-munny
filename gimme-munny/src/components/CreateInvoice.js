import { useEffect, useState } from 'react';
import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow } from './Style';

export default function CreateInvoice() {

    const [invoiceData, setInvoiceData] = useState([{description: '', rate: '', quantity: '', subtotal: ''}]);
    const [rowSubtotal, setrowSubtotal] = useState([]);
    const [rowCounter, setRowCounter] = useState(0);
    const [extraRows, setExtraRows] = useState([]);
    const [invoiceTotal, setInvoiceTotal] = useState();

    // useEffect(()=>{
    //     const rowsub = invoiceData[0]?.rate * invoiceData[0]?.quantity;
    //     setrowSubtotal(rowSubtotal.push(rowsub));
    // },[invoiceData[0]])

    // useEffect(()=>{
    //     setInvoiceTotal(invoiceData[0]?.subtotal);
    // },[invoiceData[0]])
     

    return (
        <CreateInvoiceStyle>
            <h1>CREATE INVOICE</h1>
            <FormStyle>
                <div id="rowholder">
                        <FormRow id="defaultrow">
                            <fieldset>
                                <label>Description</label>
                                <input type="text" placeholder="Description of item or service" onChange={(e)=>{
                                    invoiceData[0].description = e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData[0]})
                                    }}/>
                            </fieldset>
                            <fieldset className=''>
                                <label>Rate</label>
                                <input type="number" placeholder="$/hr" onChange={(e)=>{
                                    console.log("Setting...")
                                    const rate = e.currentTarget.value;
                                    console.log("Almost...")
                                    // if (invoiceData[0].quantity >= 1) {
                                    //     invoiceData[0].subtotal = invoiceData[0].quantity * e.currentTarget.value;
                                    // };
                                    setInvoiceData({ ...invoiceData[0], rate});
                                    console.log("Done")
                                    }}/>
                            </fieldset>
                            <fieldset className='borderright'>
                                <label>Qty</label>
                                <input type="number" placeholder='"5"' onChange={(e)=>{
                                    const quantity = e.currentTarget.value;
                                    // const subtotal = invoiceData[0]?.rate * quantity;
                                    setInvoiceData({ ...invoiceData[0], quantity});
                                    // setInvoiceData({ ...invoiceData[0], subtotal});
                                    }}/>
                            </fieldset>
                            <fieldset>
                                <label>Subtotal</label>
                                <h3>$ {invoiceData[0]?.subtotal >= 0 && rowSubtotal}</h3>
                            </fieldset>
                            <fieldset></fieldset>
                        </FormRow>
                    {extraRows.map((row, index)=>{
                    return (
                        <FormRow key={index} id={`formrow${index+2}`}>
                            <fieldset>
                                <label></label>
                                <input type="text" placeholder="Description of item or service" onChange={(e)=>{
                                    invoiceData.description = e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset className=''>
                                <label></label>
                                <input type="number" placeholder="$/hr" onChange={(e)=>{
                                    invoiceData.rate = e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset className='borderright'>
                                <label></label>
                                <input type="number" placeholder='"5"' onChange={(e)=>{
                                    invoiceData.quantity = e.currentTarget.value;
                                    invoiceData.subtotal = invoiceData.rate * e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset>
                                <label></label>
                                <h3>$ {invoiceData[0]?.subtotal >= 0 && invoiceData[0].subtotal}</h3>
                            </fieldset>
                            <fieldset>
                                <p onClick={()=>{
                                    console.log("DELETE")
                                }}>
                                delete
                                </p>
                            </fieldset>
                        </FormRow>
                    )
                })}
                </div>

                <button type="button" onClick={()=>{
                    setExtraRows([...extraRows, 'row'])
                    console.log("ADD A ROW!")
                    console.table(extraRows)
                    }}>+</button>
                <TotalRow>
                    <div></div>
                    <div></div>
                    <h1>TOTAL:</h1>
                    <h1>
                    $ {invoiceTotal}
                    </h1>
                </TotalRow>
            </FormStyle>
        <button type="button" className="bottomer" onClick={()=>{
            console.table(invoiceData)
            }}>INVOICE DATA</button>
            
        <button type="button" className="" onClick={()=>{
            console.table(extraRows)
            }}>CONSOLE ROWS</button>
        </CreateInvoiceStyle>
    )


}