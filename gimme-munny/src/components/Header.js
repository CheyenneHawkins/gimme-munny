import { useState } from "react";
import { Container, SideMenu, SideMenuItem, HeaderStyle } from "./Style";
import invoices from "../images/INVOICES.png"
import newinvoice from "../images/NEWINVOICE.png"
import recipients from "../images/RECIPIENTS.png"
import search from "../images/SEARCH.png"
import settings from "../images/SETTINGS.png"
import { useNavigate } from "react-router-dom";

export default function Header() {

    const [sidemenu, setSidemenu] = useState('menushow');

    const navigate = useNavigate();

    return (
        <>
        <HeaderStyle>
            <h1>GIMME MUNNY</h1>
            <button type="button" onClick={()=>{
                sidemenu == 'menushow' ? setSidemenu('menuhide') : setSidemenu('menushow')
            }}>Menu</button>
        </HeaderStyle>
        <SideMenu className={sidemenu}>

                <SideMenuItem onClick={()=>{navigate('/createinvoice')}}>
                    <img src={newinvoice} alt='New Invoice'/>
                    <p>Create Invoice</p>
                </SideMenuItem>
                <SideMenuItem onClick={()=>{navigate('/recipients')}}>
                    <img src={recipients} alt='Recipients'/>
                    <p>Recipients</p>
                </SideMenuItem>
                <SideMenuItem className= "" onClick={()=>{navigate('/invoices')}}>
                    <img src={invoices} alt='Invoices'/>
                    <p>Invoices</p>
                </SideMenuItem>                
                <SideMenuItem onClick={()=>{navigate('/search')}}>
                    <img src={search} alt='Search'/>
                    <p>Search</p>
                </SideMenuItem>
                <SideMenuItem onClick={()=>{navigate('/account')}}>
                    <img src={settings} alt='Account'/>
                    <p>Settings</p>
                </SideMenuItem>
            </SideMenu>
        </>
)

}