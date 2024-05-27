

import { HeaderComponent } from "../components/headerComponent/headerComponent";
import { NavLink } from "react-router-dom";
import { ImgComponent } from '../components/imgComponent/imgComponent';
import './styles.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { InputSearchDescriptionComponent } from '../components/inputComponent/inputComponent';

export const MyPhotosPage = () => {
    const todasImagenes = useSelector((state) => state.Favorites.data);
    const [imagenesFiltradas, setImagenesFiltradas] = useState(todasImagenes);
const selectSort = (event  => {
    const value = event.target.value
    const sortOption = [...imagenesFiltradas].sort((a,b)=>a[value]-b[value])
    setImagenesFiltradas (sortOption)
})

    useEffect(() => {
        setImagenesFiltradas(todasImagenes);
    }, [todasImagenes]);

    return (
        <>
            <NavLink to={'/'} >
                <span className="material-symbols-outlined myPhotos__content__icon">
                    arrow_back
                </span>
            </NavLink>
            <select name="opciones" className='select__content' onChange={selectSort}>
            <option value={"altura"} className='select__content__option'>Altura</option>
            <option value={"anchura"} className='select__content__option'>Anchura</option>
            <option value={"likes"} className='select__content__option'>Likes</option>
            <option value={"fecha_publicacion"} className='select__content__option'>Fecha de publicación</option>
        </select>
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
            <InputSearchDescriptionComponent handleSearch={setImagenesFiltradas} />
            <div className='img__contentGrid'>
                {imagenesFiltradas.map(imagen => (
                    <ImgComponent
                        key={imagen.id}  
                        id={imagen.id}   
                        image={imagen.image}
                        sizeHeight={imagen.sizeHeight}
                        sizeWidth={imagen.sizeWidth}
                        like={imagen.like}
                        date={imagen.date}
                        description={imagen.description}
                        buttonSearch={false} 
                    />
                ))}
            </div>
        </>
    );
};
