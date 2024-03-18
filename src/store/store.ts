import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer, searchReducer} from "./slices";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer
    }
})

export {
    store
}