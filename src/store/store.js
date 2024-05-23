import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";
import {MyPhotosSlice} from '../features/myPhotos/myPhotoSlice'


export const Store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        Favorites: MyPhotosSlice.reducer
    }
});
