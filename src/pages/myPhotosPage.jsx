import { HeaderComponent } from "../components/headerComponent/headerComponent"
import {SelectComponent} from '../components/selectComponent/selectComponent'
import { NavLink } from "react-router-dom"
import './styles.css'

export const MyPhotosPage = () => {
    return (

        <>
        <NavLink to={'/'} >
            <span className="material-symbols-outlined myPhotos__content__icon">
                arrow_back
            </span>
            </NavLink>
            <SelectComponent/>
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false}/>
        
            
            
    

        </>
    )
}