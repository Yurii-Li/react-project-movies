import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { genresService } from "../../services";

const initialState = {
    genres: [],
    loading: false,
    error: null,
};

const getGenres = createAsyncThunk("genresSlice/getGenres", async (_, { rejectWithValue }) => {
    try {
        const { data } = await genresService.getGenres();
        return data.genres;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getGenres.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false;
                state.genres = action.payload;
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

const { reducer: genresReducer } = genresSlice;

const genresActions = {
    getGenres,
};

export { genresReducer, genresActions };
