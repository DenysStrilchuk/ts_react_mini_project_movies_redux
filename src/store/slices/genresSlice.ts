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
})

const  {reducer:genresReducer, actions} = genresSlice;
const genresAction = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresAction
}