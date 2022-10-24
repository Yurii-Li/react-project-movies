import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { movieService } from "../../services";

const initialState = {
    movies: [],
    page: 1,
    totalPages: null,
    loading: false,
    error: null,
    movie: {},
    searchMovieValue: "",
    searchMovies: [],
    searchTotalPages: null,
    searchPage: null,
    searchMoviesByGenre: [],
    searchMoviesByGenreTotalPages: null,
    searchMoviesByGenrePage: 1,
};

const getMovies = createAsyncThunk("moviesSlice/getMovies", async (page, { rejectWithValue }) => {
    try {
        const { data } = await movieService.getMovies(page);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const getMovie = createAsyncThunk("moviesSlice/getMovie", async (id, { rejectWithValue }) => {
    try {
        const { data } = await movieService.getMovie(id);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const searchMovies = createAsyncThunk("moviesSlice/searchMovies", async (query, { rejectWithValue }) => {
    try {
        const { data } = await movieService.searchMovies(query);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const searchMoviesByGenre = createAsyncThunk(
    "moviesSlice/searchMoviesByGenre",
    async ({ genreId, page }, { rejectWithValue }) => {
        try {
            const { data } = await movieService.searchMoviesByGenre(genreId, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setSearchMovieValue(state, action) {
            state.searchMovieValue = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getMovie.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.movie = action.payload;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(searchMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.searchMovies = action.payload.results;
                state.searchPage = action.payload.page;
                state.searchTotalPages = action.payload.total_pages;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(searchMoviesByGenre.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(searchMoviesByGenre.fulfilled, (state, action) => {
                state.loading = false;
                state.searchMoviesByGenre = action.payload.results;
                state.searchMoviesByGenrePage = action.payload.page;
                state.searchMoviesByGenreTotalPages = action.payload.total_pages;
            })
            .addCase(searchMoviesByGenre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

const {
    reducer: moviesReducer,
    actions: { setSearchMovieValue },
} = moviesSlice;

const moviesActions = {
    getMovies,
    getMovie,
    searchMovies,
    setSearchMovieValue,
    searchMoviesByGenre,
};

export { moviesReducer, moviesActions };
