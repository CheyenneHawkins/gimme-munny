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
    const [menutab, setMenuTab] = useState('tabhidden');


    const navigate = useNavigate();

    function toggleMenu() {
        sidemenu == 'menushow' ? setSidemenu('menuhide') : setSidemenu('menushow');
        menutab == 'tabvisible' ? setMenuTab('tabhidden') : setMenuTab('tabvisible');
    }
    

    return (
        <>
        <HeaderStyle>
            <a href='/' alt="Gimme Munny">
                <h1>GIMME MUNNY</h1>
            </a>
        </HeaderStyle>
        <SideMenu className={sidemenu}>
                <SideMenuItem onClick={()=>{toggleMenu()}}>
                    <div className="menutabshow">◀︎ HIDE</div>
                    <div className={`menutabshow ${menutab}`}>MENU►</div>
                </SideMenuItem>
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
                <SideMenuItem onClick={()=>{navigate('/preview')}}>
                    <p></p>
                    <p>Preview</p>
                </SideMenuItem>
            </SideMenu>
        </>
)

}