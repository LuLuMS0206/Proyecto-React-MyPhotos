import { saveAs } from 'file-saver'
import './imgComponent.css'
import { addFavorite } from "../features/myPhotos/myPhotoSlice";
import { useDispatch, useSelector, useState } from 'react-redux';

export const ImgComponent = (props) => {

    const Favorites = useSelector((state) => state.Favorites.data)
    const [FavoritesImg, setFavoritesImg] = useState([]);
 

    const addFavoriteHandler = (event) => {
        dispatch(addFavorite({props.image, image:{props.image}}
            
        ))

    }


    return (
        <div>
            <img className="img__contentImage" src={props.image} />
            <div className='img__contentIcons'>
                <span onClick={} className="material-symbols-outlined img__contentIcons__star">
                    star
                </span>
            
            
                <span onClick={()=>saveAs(props.image) } className="material-symbols-outlined img__contentIcons__download">
                    download
                </span>
                
            </div>
        </div>
    )
}