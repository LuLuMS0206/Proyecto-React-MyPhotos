


import { HeaderComponent } from "../components/headerComponent/headerComponent";
import { NavLink } from "react-router-dom";
import { ImgComponent } from '../components/imgComponent/imgComponent';
import './styles.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { InputSearchDescriptionComponent } from '../components/inputComponent/inputComponent';
import { ModalComponent } from "../components/modalComponent/modalComponent";

export const MyPhotosPage = () => {
    const todasImagenes = useSelector((state) => state.Favorites.data);
    const [imagenesFiltradas, setImagenesFiltradas] = useState(todasImagenes);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const selectSort = (event) => {
        const value = event.target.value;
        const sortOption = [...imagenesFiltradas].sort((a, b) => a[value] - b[value]);
        setImagenesFiltradas(sortOption);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        setImagenesFiltradas(todasImagenes);
    }, [todasImagenes]);
console.log(todasImagenes)
    console.log(imagenesFiltradas)

    return (
        <>
            <NavLink to={'/'}>
                <span className="material-symbols-outlined myPhotos__content__icon">
                    arrow_back
                </span>
            </NavLink>
            <select name="opciones" className='select__content' onChange={selectSort}>
                <option value={"sizeHeight"} className='select__content__option'>Altura</option>
                <option value={"sizeWidth"} className='select__content__option'>Anchura</option>
                <option value={"like"} className='select__content__option'>Likes</option>
                <option value={"date"} className='select__content__option'>Fecha de publicación</option>
            </select>
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
            <InputSearchDescriptionComponent handleSearch={setImagenesFiltradas} />
            <div className='img__contentGrid'>
                {imagenesFiltradas && imagenesFiltradas.length > 0 ? (
                    imagenesFiltradas.map(imagen => (
                        imagen && ( 
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
                                onClick={() => handleImageClick(imagen)}
                            />
                        )
                    ))
                ) : (
                    <p>No images found</p>
                )}
            </div>
            {selectedImage && (
                <ModalComponent
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    sizeHeight={selectedImage.sizeHeight}
                    sizeWidth={selectedImage.sizeWidth}
                    like={selectedImage.like}
                    date={selectedImage.date}
                    description={selectedImage.description}
                />
            )}
        </>
    );
};