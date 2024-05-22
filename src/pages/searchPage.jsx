import './styles.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchThunk } from "../features/search/searchThunk"
import { HeaderComponent } from '../components/headerComponent/headerComponent';
import { ImgComponent } from '../components/imgComponent/imgComponent';


export const SearchPage = () => {


    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const Img = useSelector((state) => state.search.data)
    const ImgStatus = useSelector((state) => state.search.status)


    useEffect(() => {
        console.log(ImgStatus)
        if (ImgStatus === 'idle') {
            dispatch(SearchThunk())
        } else if (ImgStatus === 'pending') {
            setLoading(true)
        } else if (ImgStatus === 'fulfilled') {
            setLoading(false)
            setImagenes(Img)
        } else {
            alert("error")
        }

    }, [ImgStatus, Img, dispatch]);
    return (

        <>
            <HeaderComponent />
            {loading ? <p>Loading...</p> : (
                <div className='img__contentGrid'>
                    {imagenes.map(imagen => (
                        <ImgComponent

                        key={imagen.id} image={imagen.urls.small}

                        />
                    ))}
                </div>
            )}
        </>
    );
};




