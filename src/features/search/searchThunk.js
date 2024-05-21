import { createAsyncThunk } from "@reduxjs/toolkit";

export const SearchThunk = createAsyncThunk('search/getsearch', async () => {
    const response = await fetch("https://api.unsplash.com/photos/?per_page=20", {
        headers: {
            "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
        }
        
    });
    const data = await response.json();
    console.log(data);
    return data;
});




export const searchPhotosThunk = createAsyncThunk(
    'search/getSearchResults',
    async (query) => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${query}`, {
            headers: {
                "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
            }
        });
        const data = await response.json();
        return data.results;  
    }
);