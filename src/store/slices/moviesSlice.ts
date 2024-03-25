import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    page: number | null;
    movies: IMovie[];
    total_pages: number | null;
    total_results: number | null;
    movieCard: IMovie;
}

const initialState: IState = {
    page: null,
    movies: [],
    total_pages: null,
    total_results: null,
    movieCard: null
};

const getAll = createAsyncThunk<{ results: IMovie[], total_pages: number, total_results: number }, number>(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return {results: data.results, total_pages: data.results.length, total_results: data.results.length}
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getByMovieId = createAsyncThunk<IMovie, number>(
    'movieSlice/getByMovieId',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByMovieId(id);
            return data
        } catch (e) {
            const err = e as AxiosError;
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
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, total_pages, total_results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.total_results = total_results;
            })
            .addCase(getByMovieId.fulfilled, (state, action) => {
                state.movieCard = action.payload
            })
});

const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions = {
    ...actions,
    getAll,
    getByMovieId
};

export {
    moviesReducer,
    moviesActions
};