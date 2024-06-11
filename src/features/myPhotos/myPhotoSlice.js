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
            // console.log(image.id)
            state.data = state.data.filter(image => image.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.data));
            
        },

        descriptionEdit: (state, action) => {
            state.data = state.data.map(edit => {
                if (edit.id === action.payload.id) {
                    edit.description = action.payload.description
                    return edit
                }
            })
            localStorage.setItem('favorites', JSON.stringify(state.data));
            return state
        }
    }


})

export const { addFavorite, removeFavorite, descriptionEdit } = FavoritesSlice.actions;