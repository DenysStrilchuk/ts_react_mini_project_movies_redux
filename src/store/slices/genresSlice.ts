import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie} from "../../interfaces";
import {genreService} from "../../services";


interface RootState {
    genres: IState;
}

interface IState {
    page: number | null;
    genres: IGenre[];
    total_pages: number | null;
    total_results: number | null;
    movies: IMovie[];
    activeGenreId: number | null;
    genreMoviesCount: { [genreId: number]: number };
}

const initialState: IState = {
    page: null,
    genres: [],
    total_pages: null,
    total_results: null,
    movies: [],
    activeGenreId: null,
    genreMoviesCount: {}
}

const getGenreMoviesCount = createAsyncThunk<{ [genreId: number]: number }, void>(
    'genresSlice/getGenreMoviesCount',
    async (_, {getState, rejectWithValue}) => {
        try {
            const genres = (getState() as RootState).genres.genres;
            const counts: { [genreId: number]: number } = {};
            for (const genre of genres) {
                const {data} = await genreService.getByGenreId(genre.id, 1);
                counts[genre.id] = data.results.length;
            }
            return counts;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getByGenreId = createAsyncThunk<
    { results: IMovie[]; total_pages: number; total_results: number },
    { id: number; page: number }>
(
    'genresSlice/getByGenreId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getByGenreId(id, page);
            return {results: data.results, total_pages: data.results.length, total_results: data.results.length}
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getAll = createAsyncThunk<{ genres: IGenre[] }, void>(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setActiveGenreId(state, action) {
            state.activeGenreId = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = (action.payload as { genres: IGenre[] }).genres;
            })
            .addCase(getByGenreId.fulfilled, (state, action) => {
                const {results, total_pages, total_results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.total_results = total_results;
                state.activeGenreId = action.meta.arg.id;
                state.genreMoviesCount[action.meta.arg.id] = total_results;
            })
            .addCase(getGenreMoviesCount.fulfilled, (state, action) => {
                state.genreMoviesCount = action.payload;
            }),
})

const {reducer: genresReducer, actions} = genresSlice;
const genresAction = {
    ...actions,
    getAll,
    getByGenreId,
    getGenreMoviesCount
}

export {
    genresReducer,
    genresAction
}