import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";
import {urls} from "../../constants";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IMovie, void>(
    'moviesSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            movieService.getAll(urls.movie.base)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

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