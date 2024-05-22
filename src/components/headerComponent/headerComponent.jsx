import { NavLink } from "react-router-dom"
import './headerComponent.css'
import { useDispatch } from 'react-redux';
import { SearchThunk } from '../../features/search/searchThunk'
import { searchPhotosThunk } from '../../features/search/searchThunk'

// export const HeaderComponent = () => {
//     const dispatch = useDispatch()
//     const submit = (event) => {

//         event.preventDefault()
//         if (event.target.search.value === '') {
//             dispatch(SearchThunk())
//         } else {
//             dispatch(searchPhotosThunk(query))
//         }
//     }


export const HeaderComponent = () => {
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const query = event.target.search.value.trim();

        if (query === '') {
            dispatch(SearchThunk());
        } else {
            dispatch(searchPhotosThunk(query));
        }
    };

    return (

        <div className="home__content">
            <div className="home__content__flex">
            <p className='home__content__title'>Gestor de Imágenes</p>
            <NavLink to = 'myPhotos' className='home__content__titleFav'>
            <p >Mis Favoritos</p>
            </NavLink>
            </div>
            


            <form action="" onSubmit={submit}> 
            <input className=' home__content__input' type="text" placeholder='search your picture...' />
                <span className="material-symbols-outlined home__content__icon">
                    search
                </span></form>

        </div>

    )
}




