
import './selectComponent.css'

export const SelectComponent = () => {
    return (
        <select  name="opciones" className='select__content'>
            <option value="altura" className='select__content__option'>Altura</option>
            <option value="anchura"  className='select__content__option'>Anchura</option>
            <option value="likes"  className='select__content__option'>Likes</option>
            <option value="fecha_publicacion"  className='select__content__option'>Fecha de publicación</option>
        </select>
    );
}

