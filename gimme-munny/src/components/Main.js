import { Container, SideMenu, SideMenuItem, MainStyle, Shifter } from "./Style";
import invoices from "../images/INVOICES.png"
import newinvoice from "../images/NEWINVOICE.png"
import recipients from "../images/RECIPIENTS.png"
import search from "../images/SEARCH.png"
import settings from "../images/SETTINGS.png"
import { useState } from "react";

export default function Main() {
    const [sidemenu, setSidemenu] = useState('menushow');

    return (
        <>
            <SideMenu className={sidemenu}>
                <SideMenuItem>
                    <img src={invoices} alt='Invoices'/>
                    <p>Invoices</p>
                </SideMenuItem>
                <SideMenuItem>
                    <img src={newinvoice} alt='New Invoice'/>
                    <p>Create Invoice</p>
                </SideMenuItem>
                <SideMenuItem>
                    <img src={recipients} alt='Recipients'/>
                    <p>Recipients</p>
                </SideMenuItem>
                <SideMenuItem>
                    <img src={search} alt='Search'/>
                    <p>Search</p>
                </SideMenuItem>
                <SideMenuItem>
                    <img src={settings} alt='Settings'/>
                    <p>Settings</p>
                </SideMenuItem>
            </SideMenu>
            <MainStyle>
            <Shifter>

            <button type="button" onClick={()=>{
                sidemenu == 'menushow' ? setSidemenu('menuhide') : setSidemenu('menushow')
            }}>Menu</button>
            </Shifter>
            
            </MainStyle>
            </>
            )

}