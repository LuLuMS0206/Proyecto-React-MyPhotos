import { useDispatch } from 'react-redux';
import { SearchThunk } from '../../features/search/searchThunk'
import { searchPhotosThunk } from '../../features/search/searchThunk'
import './inputComponent.css'

export const InputSearchComponent = () => {
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const query = event.target.elements.search.value;
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


export const InputSearchDescriptionComponent = () => {
    return (
        <div>
            <input className='home__content__input' type="text" placeholder='search your picture description...' />
            <span className="material-symbols-outlined home__content__icon">
                search
            </span>
        </div>
    );
}
