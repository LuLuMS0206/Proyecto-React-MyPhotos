import { FooterComponent } from "../footerComponent/footerComponent"
import { NavbarComponent } from "../navbarComponent/navbarComponent"
import { Outlet } from "react-router-dom"

export const StructureComponent = () => {

    return (

        <div >
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </div>

    )
}