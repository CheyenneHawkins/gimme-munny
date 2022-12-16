import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { CreateInvoiceStyle, FormStyle, FormRow, TotalRow } from './Style';

export default function CreateInvoice() {

    //object to store invoiceData fields
    const invoiceRowFields = 
    (row)=>{
        return ({row: row, description: '', rate: '', quantity: '', subtotal: '', total: ''})
    };

    //------STATES-------//
    const [invoiceData, setInvoiceData] = useState([
        invoiceRowFields(1),
    ]);
    const [rows, setRows] = useState(['row']);
    const [invoiceTotal, setInvoiceTotal] = useState();

    // useEffect(()=>{
    //     renderRows();
    // }, [invoiceData]) 

    //prints invoiceData on each change
    useEffect(()=>{
        console.clear();
        console.table(invoiceData);
    }, [invoiceData])



    function updateInvoiceData(field, value, row) {
        setInvoiceData(state =>
            state.map(index => {
                if (index.row === row){
                    return {...index, [field]: value};
                }
            return index
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
    }

    function renderRows(){

        const fields =
            invoiceData.map((row, index)=>{
                return (
                    <FormRow key={index} id={`formrow${index+2}`}>
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
                    <input type="number" placeholder="$/hr" onChange={(e)=>{
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
                    <input type="number" placeholder='"5"' onChange={(e)=>{
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
                            {rowNum != 1 && 'delete'}
                        </button>
                    </p>
                </fieldset>
            </>
                )
    }

    // const [invoiceFormUI, setInvoiceFormUI] = useState(renderRows());

    return (
        <CreateInvoiceStyle>
            <h1>CREATE INVOICE</h1>
            <FormStyle>
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
                    {/* {invoiceData.map((row, index)=>{
                    return (
                        <FormRow key={index} id={`formrow${index+2}`}>
                            {invoiceRow(index+1)}
                        </FormRow>
                    )
                })} */}
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
            // renderRows();
            // console.log(invoiceFormUI);
            // console.log(renderRows());
            }}>FORM UI</button>
        </CreateInvoiceStyle>
    )


}