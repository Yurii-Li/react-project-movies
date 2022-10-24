import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { genresReducer, moviesReducer } from "./slices";

const rootReducer = combineReducers({
    genresReducer,
    moviesReducer,
});

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export { setupStore };
