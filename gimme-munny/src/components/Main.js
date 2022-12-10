import { Container, SideMenu, SideMenuItem } from "./Style";
import invoices from "../images/INVOICES.png"
import newinvoice from "../images/NEWINVOICE.png"
import recipients from "../images/RECIPIENTS.png"
import search from "../images/SEARCH.png"
import settings from "../images/SETTINGS.png"

export default function Main() {
    return (
    <SideMenu>
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
    )

}