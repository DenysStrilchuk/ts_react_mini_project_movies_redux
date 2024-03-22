import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";

interface IState {
    page: number | null;
    movies: IMovie[];
    total_pages: number  | null;
    total_results: number | null;
}

const initialState:IState = {
    page: null,
    movies: [],
    total_pages: null,
    total_results: null
}

const getAll = createAsyncThunk<IState, {query: string, page: number}>(
    'searchSlice/getAll',
    async ({query, page}, {rejectWithValue}) => {
        if (query.trim() !== "") {
            try {
                const {data} = await searchService.getAll(query, page);
                return {
                    page: data.page,
                    movies: data.results,
                    total_pages: data.total_pages,
                    total_results: data.total_results
                };
            } catch (e) {
                const err = e as AxiosError;
                return rejectWithValue(err.response?.data);
            }
        }
    }
);

const searchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.movies = action.payload.movies;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
            })
})

const {reducer: searchReducer, actions} = searchSlice;
const searchActions = {
    ...actions,
    getAll
}

export {
    searchReducer,
    searchActions
}