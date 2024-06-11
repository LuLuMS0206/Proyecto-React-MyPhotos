// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const SearchThunk = createAsyncThunk('search/getsearch', async () => {
//     const response = await fetch("https://api.unsplash.com/photos/?per_page=20", {
//         headers: {
//             "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
//         }

//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
// });




// export const searchPhotosThunk = createAsyncThunk(
//     'search/getSearchResults',
//     async (query) => {
//         const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}`, {
//             headers: {
//                 "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
//             }
//         });
//         const dataSearch = await response.json();
//         return dataSearch.results;  
//     }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";


export const SearchThunk = createAsyncThunk(
    'search/getsearch',
    async ({ page = 1 }, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/?per_page=20&page=${page}`, {
                headers: {
                    "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const searchPhotosThunk = createAsyncThunk(
    'search/getSearchResults',
    async (query, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}`, {
                headers: {
                    "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataSearch = await response.json();
            return dataSearch.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
