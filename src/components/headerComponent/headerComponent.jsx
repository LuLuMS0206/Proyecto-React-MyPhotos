
import './headerComponent.css'

export const HeaderComponent = () => {

    return (

        <div className="home__content">
            <p className='home__content__title'>Gestor de Imágenes</p>

            

            <input className=' home__content__input' type="text" placeholder='search your picture...'/>
            <span className="material-symbols-outlined home__content__icon">
                search
            </span>
        </div>

    )
}




