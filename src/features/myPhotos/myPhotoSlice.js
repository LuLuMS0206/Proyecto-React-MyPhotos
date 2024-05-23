import { createSlice } from "@reduxjs/toolkit";

export const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(image => image.id !== action.payload.id);
        }
    }
})

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;