

// import { HeaderComponent } from "../components/headerComponent/headerComponent";
// import { SelectComponent } from '../components/selectComponent/selectComponent';
// import { NavLink } from "react-router-dom";
// import { ImgComponent } from '../components/imgComponent/imgComponent';
// import './styles.css';
// import { useSelector } from "react-redux";

// export const MyPhotosPage = () => {
//     const imagenes = useSelector((state) => state.Favorites.data);
// console.log(imagenes)
//     return (
//         <>
//             <NavLink to={'/'} >
//                 <span className="material-symbols-outlined myPhotos__content__icon">
//                     arrow_back
//                 </span>
//             </NavLink>
//             <SelectComponent />
//             <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
//             <div className='img__contentGrid'>
//                 {imagenes.map(imagen => (
//                     <ImgComponent
//                         key={imagen.id}  
//                         id={imagen.id}   
//                         image={imagen.image}
//                         sizeHeight={imagen.sizeHeight}
//                         sizeWidth={imagen.sizeWidth}
//                         like={imagen.like}
//                         date={imagen.date}
//                         description={imagen.description}
//                         buttonSearch={false} 
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };


// import { HeaderComponent } from "../components/headerComponent/headerComponent";
// import { SelectComponent } from '../components/selectComponent/selectComponent';
// import { NavLink } from "react-router-dom";
// import { ImgComponent } from '../components/imgComponent/imgComponent';
// import './styles.css';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from 'react';
// import { InputSearchDescriptionComponent } from './InputSearchDescriptionComponent';

// export const MyPhotosPage = () => {
//     const todasImagenes = useSelector((state) => state.Favorites.data);
//     const [imagenesFiltradas, setImagenesFiltradas] = useState(todasImagenes);

//     useEffect(() => {
//         setImagenesFiltradas(todasImagenes);
//     }, [todasImagenes]);

//     const handleSearch = (query) => {
//         if (query === '') {
//             setImagenesFiltradas(todasImagenes);
//         } else {
//             const filtradas = todasImagenes.filter(imagen =>
//                 imagen.description.toLowerCase().includes(query.toLowerCase())
//             );
//             setImagenesFiltradas(filtradas);
//         }
//     };

//     return (
//         <>
//             <NavLink to={'/'} >
//                 <span className="material-symbols-outlined myPhotos__content__icon">
//                     arrow_back
//                 </span>
//             </NavLink>
//             <SelectComponent />
//             <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
//             <InputSearchDescriptionComponent handleSearch={handleSearch} />
//             <div className='img__contentGrid'>
//                 {imagenesFiltradas.map(imagen => (
//                     <ImgComponent
//                         key={imagen.id}  
//                         id={imagen.id}   
//                         image={imagen.image}
//                         sizeHeight={imagen.sizeHeight}
//                         sizeWidth={imagen.sizeWidth}
//                         like={imagen.like}
//                         date={imagen.date}
//                         description={imagen.description}
//                         buttonSearch={false} 
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };


// import { HeaderComponent } from "../components/headerComponent/headerComponent";
// import { SelectComponent } from '../components/selectComponent/selectComponent';
// import { NavLink } from "react-router-dom";
// import { ImgComponent } from '../components/imgComponent/imgComponent';
// import './styles.css';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from 'react';
// import { InputSearchDescriptionComponent } from '../components/inputComponent/inputComponent';

// export const MyPhotosPage = () => {
//     const todasImagenes = useSelector((state) => state.Favorites.data);
//     const [imagenesFiltradas, setImagenesFiltradas] = useState(todasImagenes);

//     useEffect(() => {
//         setImagenesFiltradas(todasImagenes);
//     }, [todasImagenes]);

    // const handleSearch = (query) => {
    //     if (query === '') {
    //         setImagenesFiltradas(todasImagenes);
    //     } else {
    //         const filtradas = todasImagenes.filter(imagen =>
    //             imagen.description.toLowerCase().includes(query.toLowerCase())
    //         );
    //         setImagenesFiltradas(filtradas);
    //     }
    // };

//     const handleSearch = (query) => {
//         if (query === '') {
//             setImagenesFiltradas(todasImagenes);
//         } else {
//             const filtradas = todasImagenes.filter(imagen =>
//                 imagen.description && imagen.description.toLowerCase().includes(query.toLowerCase())
//             );
//             setImagenesFiltradas(filtradas);
//         }
//     };
    

//     return (
//         <>
//             <NavLink to={'/'} >
//                 <span className="material-symbols-outlined myPhotos__content__icon">
//                     arrow_back
//                 </span>
//             </NavLink>
//             <SelectComponent />
//             <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
//             <InputSearchDescriptionComponent handleSearch={handleSearch} />
//             <div className='img__contentGrid'>
//                 {imagenesFiltradas.map(imagen => (
//                     <ImgComponent
//                         key={imagen.id}  
//                         id={imagen.id}   
//                         image={imagen.image}
//                         sizeHeight={imagen.sizeHeight}
//                         sizeWidth={imagen.sizeWidth}
//                         like={imagen.like}
//                         date={imagen.date}
//                         description={imagen.description}
//                         buttonSearch={false} 
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };



import { HeaderComponent } from "../components/headerComponent/headerComponent";
import { SelectComponent } from '../components/selectComponent/selectComponent';
import { NavLink } from "react-router-dom";
import { ImgComponent } from '../components/imgComponent/imgComponent';
import './styles.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { InputSearchDescriptionComponent } from '../components/inputComponent/inputComponent';

export const MyPhotosPage = () => {
    const todasImagenes = useSelector((state) => state.Favorites.data);
    const [imagenesFiltradas, setImagenesFiltradas] = useState(todasImagenes);
    const [sortOption, setSortOption] = useState('altura'); 

    useEffect(() => {
        setImagenesFiltradas(todasImagenes);
    }, [todasImagenes]);

    const handleSearch = (query) => {
        if (query === '') {
            setImagenesFiltradas(todasImagenes);
        } else {
            const filtradas = todasImagenes.filter(imagen =>
                imagen.description && imagen.description.toLowerCase().includes(query.toLowerCase())
            );
            setImagenesFiltradas(filtradas);
        }
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        let sortedImages = [...imagenesFiltradas];

        switch (option) {
            case 'altura':
                sortedImages.sort((a, b) => b.sizeHeight - a.sizeHeight);
                break;
            case 'anchura':
                sortedImages.sort((a, b) => b.sizeWidth - a.sizeWidth);
                break;
            case 'likes':
                sortedImages.sort((a, b) => b.like - a.like);
                break;
            case 'fecha_publicacion':
                sortedImages.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            default:
                break;
        }

        setImagenesFiltradas(sortedImages);
    };

    return (
        <>
            <NavLink to={'/'} >
                <span className="material-symbols-outlined myPhotos__content__icon">
                    arrow_back
                </span>
            </NavLink>
            <SelectComponent onSortChange={handleSortChange} />
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
            <InputSearchDescriptionComponent handleSearch={handleSearch} />
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
