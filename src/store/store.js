import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../features/search/searchSlice";


export const Store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    }
});
