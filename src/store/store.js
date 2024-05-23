import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";
import {FavoritesSlice} from '../features/myPhotos/myPhotoSlice'


export const Store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        Favorites: FavoritesSlice.reducer
    }
});
