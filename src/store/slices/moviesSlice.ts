import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";


interface IState {
    page: number;
    movies: IMovie[];
}

const initialState: IState = {
    page: null,
    movies: [],
};

const getAll = createAsyncThunk<IMovie[], number>(
    'moviesSlice/getAll',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getAll(page);
            return data.results;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;

                console.log("Updated movies state:", state.movies);
            })
});

const { reducer: moviesReducer, actions } = moviesSlice;
const moviesActions = {
    ...actions,
    getAll
};

export {
    moviesReducer,
    moviesActions
};