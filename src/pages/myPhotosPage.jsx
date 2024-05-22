import { HeaderComponent } from "../components/headerComponent/headerComponent"
import { NavLink } from "react-router-dom"


export const MyPhotosPage = () => {
    return (

        <>
        <NavLink to={'/'} >
            <span className="material-symbols-outlined">
                arrow_back
            </span>
            </NavLink>
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false}/>

        </>
    )
}