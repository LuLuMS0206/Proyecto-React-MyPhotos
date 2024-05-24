
import { useState } from 'react';
import './selectComponent.css';

export const SelectComponent = ({ onSortChange }) => {
    const [selectedOption, setSelectedOption] = useState('altura'); 

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSortChange(selectedValue); 
    };

    return (
        <select name="opciones" className='select__content' value={selectedOption} onChange={handleSelectChange}>
            <option value="altura" className='select__content__option'>Altura</option>
            <option value="anchura" className='select__content__option'>Anchura</option>
            <option value="likes" className='select__content__option'>Likes</option>
            <option value="fecha_publicacion" className='select__content__option'>Fecha de publicación</option>
        </select>
    );
};
