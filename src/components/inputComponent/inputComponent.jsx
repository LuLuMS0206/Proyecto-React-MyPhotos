import { useDispatch } from 'react-redux';
import { SearchThunk } from '../../features/search/searchThunk'
import { searchPhotosThunk } from '../../features/search/searchThunk'
import { useState } from 'react';
import './inputComponent.css'

export const InputSearchComponent = () => {
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const query = event.target.search.value;
        if (query === '') {
            dispatch(SearchThunk());
        } else {
            dispatch(searchPhotosThunk(query));
        }
    };

    return (
        <form onSubmit={submit}>
            <input className='home__content__input' type="text" name="search" placeholder='search your picture...' />
            <span className="material-symbols-outlined home__content__icon">
                search
            </span>
        </form>
    );
};

export const InputSearchDescriptionComponent = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div>
            <input 
                className='home__content__input' 
                type="text" 
                placeholder='search your picture description......' 
                value={query}
                onChange={handleChange}
            />
            <span 
                className="material-symbols-outlined home__content__icon"
                onClick={() => handleSearch(query)}
            >
                search
            </span>
        </div>
    );
};




