import { saveAs } from 'file-saver';
import './imgComponent.css';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../features/myPhotos/myPhotoSlice';

export const ImgComponent = (props) => {
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
                    <span className="material-symbols-outlined img__contentIcons__star">
                        delete
                    </span>
                </div>
            )}
        </div>
    );
};
