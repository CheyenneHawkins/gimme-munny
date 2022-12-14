import { useEffect, useState } from 'react';
import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow } from './Style';

export default function CreateInvoice() {

    const [invoiceData, setInvoiceData] = useState([
        {row: 1, description: '', rate: '', quantity: '', subtotal: ''},
        {row: '', description: '', rate: '', quantity: '', subtotal: ''},
    ]);
    const [rowSubtotal, setrowSubtotal] = useState([]);
    const [rowCounter, setRowCounter] = useState(0);
    const [extraRows, setExtraRows] = useState([]);
    const [invoiceTotal, setInvoiceTotal] = useState();

    // useEffect(()=>{
    //     const rowsub = invoiceData[0]?.rate * invoiceData[0]?.quantity;
    //     setrowSubtotal(rowSubtotal.push(rowsub));
    // },[invoiceData[0]])

    useEffect(()=>{
        console.clear();
        console.table(invoiceData);
    }, invoiceData)

    useEffect(()=>{
        const subtotal = invoiceData[0]?.rate * invoiceData[0]?.quantity;
        updateInvoiceData('subtotal', subtotal)
    }, [invoiceData[0].quantity, invoiceData[0].rate])


    function updateInvoiceData(field, value) {
        setInvoiceData(state =>
            state.map(index => {
                if (index.row === 1){
                    return {...index, [field]: value};
                }
            return index
        }))

    }

    return (
        <CreateInvoiceStyle>
            <h1>CREATE INVOICE</h1>
            <FormStyle>
                <div id="rowholder">
                {//-------------DEFAULT ROW---------------------}
                }
                        <FormRow id="defaultrow">
                            <fieldset>
                                <label>Description</label>
                                <input type="text" placeholder="Description of item or service" onChange={(e)=>{
                                    const value = e.currentTarget.value;
                                    updateInvoiceData('description', value)
                                    }   //onChange closer
                                    }/>     
                            </fieldset>
                            <fieldset className=''>
                                <label>Rate</label>
                {//-------------RATE---------------------}
                }
                                <input type="number" placeholder="$/hr" onChange={(e)=>{
                                    const value = e.currentTarget.value;
                                    updateInvoiceData('rate', value)
                                    // if (row1.quantity >= 1) {
                                    //     row1.subtotal = row1.quantity * e.currentTarget.value;
                                    // };
                                    }}/>
                            </fieldset>
                {//-------------QTY---------------------}
                }                            
                            <fieldset className='borderright'>
                                <label>Qty</label>
                                <input type="number" placeholder='"5"' onChange={(e)=>{
                                    const value = e.currentTarget.value;
                                    updateInvoiceData('quantity', value)

                                    }}/>
                            </fieldset>
                {//-------------SUBTOTAL---------------------}
                }                            
                            <fieldset>
                                <label className='scoot'>Subtotal</label>
                                <h3>$ {invoiceData[0]?.subtotal > 0 && (invoiceData[0].subtotal)}</h3>
                            </fieldset>
                            <fieldset></fieldset>
                        </FormRow>

            {//-------------------------------------------------}
            //-------------------EXTRA ROWS---------------------}
                }                           
                    {extraRows.map((row, index)=>{
                    return (
                        <FormRow key={index} id={`formrow${index+2}`}>
                            <fieldset>
                                <label></label>
                                <input type="text" placeholder="Description of item or service" onChange={(e)=>{
                                    invoiceData[1].description = e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset className=''>
                                <label></label>
                                <input type="number" placeholder="$/hr" onChange={(e)=>{
                                    invoiceData[1].rate = e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset className='borderright'>
                                <label></label>
                                <input type="number" placeholder='"5"' onChange={(e)=>{
                                    invoiceData[1].quantity = e.currentTarget.value;
                                    invoiceData[1].subtotal = invoiceData[1].rate * e.currentTarget.value;
                                    setInvoiceData({ ...invoiceData})
                                    }}/>
                            </fieldset>
                            <fieldset>
                                <label></label>
                                <h3>$ {invoiceData[1]?.subtotal >= 0 && invoiceData[0].subtotal}</h3>
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
                    <h1 className='textalignleft'>
                    $ {invoiceTotal}
                    </h1>
                </TotalRow>
            </FormStyle>
        <button type="button" className="" onClick={()=>{
            console.table(invoiceData)
            }}>INVOICE DATA</button>
            <br/>
        <button type="button" className="" onClick={()=>{
            console.table(extraRows)
            }}>CONSOLE ROWS</button>
        </CreateInvoiceStyle>
    )


}