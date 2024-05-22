import { NavLink } from "react-router-dom"
import './headerComponent.css'
import { InputSearchComponent } from '../inputComponent/inputComponent'
import { InputSearchDescriptionComponent } from '../inputComponent/inputComponent'




export const HeaderComponent = (props) => {

    const titleSearch = 'Gestor de Imágenes'
    const titleFavorite = 'My Favorite Photos'
    const linkSearch = 'Mis Favoritos'
    const linkFav = ''





    return (

        <div className="home__content">
            <div className="home__content__flex">
                {props.titleSearch ? <p className='home__content__title'>{titleSearch}</p> : <p className='home__content__title'>{titleFavorite}</p>}
                <NavLink to='myPhotos' className='home__content__titleFav'>
                {props.linkSearch ? <p className='home__content__title'>{linkSearch}</p> : <p className='home__content__title'>{linkFav}</p>}
                
                </NavLink>
            </div>

            {props.inputSearch ? <InputSearchComponent /> : <InputSearchDescriptionComponent />}


        </div>

    )
}




