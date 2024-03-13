import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
})

const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions  = {
    ...actions
}

export {
    moviesReducer,
    moviesActions
}