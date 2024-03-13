import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {AxiosError} from "axios";


interface IState {
    movies: IMovie
}

const initialState: IState = {
    movies: null
}

const getAll = createAsyncThunk<IMovie, void>(
    'moviesSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {

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
    ...actions,
    getAll
}

export {
    moviesReducer,
    moviesActions
}