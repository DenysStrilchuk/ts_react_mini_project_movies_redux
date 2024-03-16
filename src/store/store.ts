import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer
    }
})

export {
    store
}