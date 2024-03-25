import {configureStore} from "@reduxjs/toolkit";

import {genresReducer, moviesReducer, searchReducer, themeReducer} from "./slices";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
        theme: themeReducer
    }
})

export {
    store
}