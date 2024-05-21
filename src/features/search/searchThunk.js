import { createAsyncThunk } from "@reduxjs/toolkit";

export const SearchThunk = createAsyncThunk('search/getsearch', async () => {
    const response = await fetch("https://api.unsplash.com/photos/", {
        headers: {
            "Authorization": "Client-ID h9Uv1T3F_36nJcRw5hM0Wgeme8JVAHyJpx8zrMCuAew"
        }
        
    });
    const data = await response.json();
    console.log(data);
    return data;
});
