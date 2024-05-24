


import { saveAs } from 'file-saver';
import './imgComponent.css';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/myPhotos/myPhotoSlice';
import { ModalComponent } from '../modalComponent/modalComponent';
import { useState } from 'react';

export const ImgComponent = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const addFavoriteHandler = () => {
        dispatch(addFavorite({
            width: props.sizeWidth,
            height: props.sizeHeight,
            likes: props.like,
            date: props.date,
            image: props.image,
        }));
    };

    const removeFavoriteHandler = () => {
        dispatch(removeFavorite({
            id: props.id,  
        }));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <img className="img__contentImage" src={props.image} alt="content" />
            {props.buttonSearch ? (
                <div className='img__contentIcons'>
                    <span onClick={addFavoriteHandler} className="material-symbols-outlined img__contentIcons__star">
                        star
                    </span>
                    <span onClick={() => saveAs(props.image)} className="material-symbols-outlined img__contentIcons__download">
                        download
                    </span>
                </div>
            ) : (
                <div className='img__contentIcons'>
                    <span onClick={removeFavoriteHandler} className="material-symbols-outlined img__contentIcons__delete">
                        delete
                    </span>
                    <span onClick={openModal} className="material-symbols-outlined img__contentIcons__edit">
                        edit
                    </span>
                </div>
            )}
            <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};
