

import { createSlice } from "@reduxjs/toolkit";
import {SearchThunk } from "./searchThunk";
import {searchPhotosThunk} from "./searchThunk";

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
            .addCase(SearchThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(SearchThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(SearchThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(searchPhotosThunk.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(searchPhotosThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(searchPhotosThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addImg } = searchSlice.actions;