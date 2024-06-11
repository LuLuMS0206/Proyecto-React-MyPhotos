
// import './styles.css';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { SearchThunk } from "../features/search/searchThunk";
// import { HeaderComponent } from '../components/headerComponent/headerComponent';
// import { ImgComponent } from '../components/imgComponent/imgComponent';

// export const SearchPage = () => {
//     const [imagenes, setImagenes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const Img = useSelector((state) => state.search.data);
//     const ImgStatus = useSelector((state) => state.search.status);

//     useEffect(() => {
//         if (ImgStatus === 'idle') {
//             dispatch(SearchThunk());
//         } else if (ImgStatus === 'pending') {
//             setLoading(true);
//         } else if (ImgStatus === 'fulfilled') {
//             setLoading(false);
//             setImagenes(Img);
//         }
//     }, [ImgStatus, Img, dispatch]);

//     return (
//         <>
//             <HeaderComponent titleSearch={true} inputSearch={true} linkSearch={true} />
//             {loading ? <p>Loading...</p> : (
//                 <div className='img__contentGrid'>
//                     {imagenes.map(imagen => (
//                         <ImgComponent
//                             key={imagen.id}
//                             id={imagen.id}
//                             image={imagen.urls.small}
//                             sizeHeight={imagen.height}
//                             sizeWidth={imagen.width}
//                             like={imagen.likes}
//                             date={imagen.created_at}
//                             description={imagen.alt_description}
//                             buttonSearch={true} 
//                         />
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };


import './styles.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchThunk } from "../features/search/searchThunk";
import { HeaderComponent } from '../components/headerComponent/headerComponent';
import { ImgComponent } from '../components/imgComponent/imgComponent';
import { PaginationComponent } from '../components/paginationComponent/paginationComponent';

export const SearchPage = () => {
    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const Img = useSelector((state) => state.search.data);
    const ImgStatus = useSelector((state) => state.search.status);

    useEffect(() => {
        dispatch(SearchThunk({ page }));
    }, [page, dispatch]);

    useEffect(() => {
        if (ImgStatus === 'pending') {
            setLoading(true);
        } else if (ImgStatus === 'fulfilled') {
            setLoading(false);
            setImagenes(Img);
        }
    }, [ImgStatus, Img]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <HeaderComponent titleSearch={true} inputSearch={true} linkSearch={true} />
            {loading ? <p>Loading...</p> : (
                <>
                    <div className='img__contentGrid'>
                        {imagenes.map(imagen => (
                            <ImgComponent
                                key={imagen.id}
                                id={imagen.id}
                                image={imagen.urls.small}
                                sizeHeight={imagen.height}
                                sizeWidth={imagen.width}
                                like={imagen.likes}
                                date={imagen.created_at}
                                description={imagen.alt_description}
                                buttonSearch={true}
                            />
                        ))}
                    </div>
                    <PaginationComponent 
                        currentPage={page}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </>
    );
};
