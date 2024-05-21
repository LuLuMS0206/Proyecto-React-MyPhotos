

import { createSlice } from "@reduxjs/toolkit";
import {SearchThunk } from "./searchThunk";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addImg: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(SearchThunk.pending, (state, action) => {
                state.status = 'pending';
                state.data = action.payload;
            })
            .addCase(SearchThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(SearchThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = '';
                state.data = action.payload;
            })
    
    }
});

export const { addImg } = searchSlice.actions;