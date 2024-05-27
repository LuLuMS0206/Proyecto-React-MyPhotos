import { createSlice } from "@reduxjs/toolkit";

export const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        status: 'idle',
        data: JSON.parse(localStorage.getItem('favorites')) || [],
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.data));
        },
        removeFavorite: (state, action) => {
            console.log(action.payload)
            state.data = state.data.filter(image => image.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.data));
        }
    }
})

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;