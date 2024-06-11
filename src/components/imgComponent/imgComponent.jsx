
// import { saveAs } from 'file-saver';
// import './imgComponent.css';
// import { useDispatch } from 'react-redux';
// import { addFavorite } from '../../features/myPhotos/myPhotoSlice';
// import { ModalComponent } from '../modalComponent/modalComponent';
// import { useState } from 'react';
// import { descriptionEdit } from '../../features/myPhotos/myPhotoSlice';

// export const ImgComponent = (props) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const dispatch = useDispatch();

//     const addFavoriteHandler = () => {
//         dispatch(addFavorite({
//             width: props.sizeWidth,
//             height: props.sizeHeight,
//             likes: props.like,
//             date: props.date,
//             image: props.image,
//             description: props.description,
//             id: props.id,
//         }));
//     };

//     const removeFavoriteHandler = () => {
//         props.onRemove(); // Llamada a la función pasada como prop
//     };

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const editDescription = (event) => {
//         event.preventDefault();
//         const valor = event.target.elements[0].value;
//         dispatch(descriptionEdit({
//             id: props.id,
//             description: valor
//         }));
//         setIsModalOpen(false);
//     };

//     return (
//         <div>
//             <img className="img__contentImage" src={props.image} alt="content" />
//             {props.buttonSearch ? (
//                 <div className='img__contentIcons'>
//                     <span onClick={addFavoriteHandler} className="material-symbols-outlined img__contentIcons__star">
//                         star
//                     </span>
//                     <span onClick={() => saveAs(props.image)} className="material-symbols-outlined img__contentIcons__download">
//                         download
//                     </span>
//                 </div>
//             ) : (
//                 <div className='img__contentIcons'>
//                     <span onClick={removeFavoriteHandler} className="material-symbols-outlined img__contentIcons__delete">
//                         delete
//                     </span>
//                     <span onClick={openModal} className="material-symbols-outlined img__contentIcons__edit">
//                         edit
//                     </span>
//                 </div>
//             )}
//             <ModalComponent
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 sendInfo={editDescription}
//                 sizeHeight={props.sizeHeight}
//                 sizeWidth={props.sizeWidth}
//                 like={props.like}
//                 date={props.date}
//                 description={props.description}
//             />
//         </div>
//     );
// };


// import { saveAs } from 'file-saver';
// import './imgComponent.css';
// import { useDispatch } from 'react-redux';
// import { addFavorite } from '../../features/myPhotos/myPhotoSlice';
// import { ModalComponent } from '../modalComponent/modalComponent';
// import { useState } from 'react';
// import { descriptionEdit } from '../../features/myPhotos/myPhotoSlice';

// export const ImgComponent = (props) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const dispatch = useDispatch();

//     const addFavoriteHandler = () => {
//         dispatch(addFavorite({
//             width: props.sizeWidth,
//             height: props.sizeHeight,
//             likes: props.like,
//             date: props.date,
//             image: props.image,
//             description: props.description,
//             id: props.id,
//         }));
//     };

//     const removeFavoriteHandler = () => {
//         if (props.onRemove) {
//             props.onRemove(); // Llamada a la función pasada como prop
//         }
//     };

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const editDescription = (event) => {
//         event.preventDefault();
//         const valor = event.target.elements[0].value;
//         dispatch(descriptionEdit({
//             id: props.id,
//             description: valor
//         }));
//         setIsModalOpen(false);
//     };

//     return (
//         <div>
//             <img className="img__contentImage" src={props.image} alt="content" />
//             {props.buttonSearch ? (
//                 <div className='img__contentIcons'>
//                     <span onClick={addFavoriteHandler} className="material-symbols-outlined img__contentIcons__star">
//                         star
//                     </span>
//                     <span onClick={() => saveAs(props.image)} className="material-symbols-outlined img__contentIcons__download">
//                         download
//                     </span>
//                 </div>
//             ) : (
//                 <div className='img__contentIcons'>
//                     <span onClick={removeFavoriteHandler} className="material-symbols-outlined img__contentIcons__delete">
//                         delete
//                     </span>
//                     <span onClick={openModal} className="material-symbols-outlined img__contentIcons__edit">
//                         edit
//                     </span>
//                 </div>
//             )}
//             <ModalComponent
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 sendInfo={editDescription}
//                 sizeHeight={props.sizeHeight}
//                 sizeWidth={props.sizeWidth}
//                 like={props.like}
//                 date={props.date}
//                 description={props.description}
//             />
//         </div>
//     );
// };


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
            description: props.description,
            id: props.id,
        }));
    };

    const removeFavoriteHandler = () => {
        dispatch(removeFavorite(props.id));
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
            <ModalComponent
                isOpen={isModalOpen}
                onClose={closeModal}
                sizeHeight={props.sizeHeight}
                sizeWidth={props.sizeWidth}
                like={props.like}
                date={props.date}
                description={props.description}
            />
        </div>
    );
};