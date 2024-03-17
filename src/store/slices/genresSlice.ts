import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IMovie} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    page: number | null;
    genres: IGenre[];
    total_pages: number | null;
    total_results: number | null;
    movies: IMovie[];
}

const initialState: IState = {
    page: null,
    genres: [],
    total_pages: null,
    total_results: null,
    movies: []
}

const getByGenreId = createAsyncThunk<
    { results: IMovie[]; total_pages: number; total_results: number },
    number>
(
    'genresSlice/getByGenreId',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await genreService.getByGenreId(id);
            return {results: data.results, total_pages: data.results.length, total_results: data.results.length}
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getAll = createAsyncThunk<{genres:IGenre[]},void>(
    'genresSlice/getAll',
    async (_,{rejectWithValue}) =>  {
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            const err  = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = (action.payload as { genres: IGenre[] }).genres;
            })
            .addCase(getByGenreId.fulfilled, (state, action)  =>{
                const {results, total_pages, total_results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.total_results = total_results;
            })
})

const  {reducer:genresReducer, actions} = genresSlice;
const genresAction = {
    ...actions,
    getAll,
    getByGenreId
}

export {
    genresReducer,
    genresAction
}