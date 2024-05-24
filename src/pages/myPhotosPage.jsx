

// import { HeaderComponent } from "../components/headerComponent/headerComponent";
// import { SelectComponent } from '../components/selectComponent/selectComponent';
// import { NavLink } from "react-router-dom";
// import { ImgComponent } from '../components/imgComponent/imgComponent';
// import './styles.css';
// import { useSelector } from "react-redux";

// export const MyPhotosPage = () => {
//     const imagenes = useSelector((state) => state.Favorites.data);

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
//                         key={imagen.key}
//                         image={imagen.image}
//                         sizeHeight={imagen.sizeHeight}
//                         sizeWidth={imagen.sizeWidth}
//                         like={imagen.like}
//                         date={imagen.date}
//                         description={imagen.description}
//                         buttonSearch={false} // Aquí se asegura que buttonSearch es falso
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

// export const MyPhotosPage = () => {
//     const imagenes = useSelector((state) => state.Favorites.data);

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
//                         key={imagen.id}  // Usar id como key
//                         id={imagen.id}   // Pasar id como prop
//                         image={imagen.image}
//                         sizeHeight={imagen.sizeHeight}
//                         sizeWidth={imagen.sizeWidth}
//                         like={imagen.like}
//                         date={imagen.date}
//                         description={imagen.description}
//                         buttonSearch={false} // Asegura que buttonSearch es falso
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

export const MyPhotosPage = () => {
    const imagenes = useSelector((state) => state.Favorites.data);

    return (
        <>
            <NavLink to={'/'} >
                <span className="material-symbols-outlined myPhotos__content__icon">
                    arrow_back
                </span>
            </NavLink>
            <SelectComponent />
            <HeaderComponent titleSearch={false} inputSearch={false} linkSearch={false} />
            <div className='img__contentGrid'>
                {imagenes.map(imagen => (
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
