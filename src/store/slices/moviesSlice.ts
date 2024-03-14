import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";


interface IState {
    page: number | null;
    movies: IMovie[];
}

const initialState: IState = {
    page: null,
    movies: [],
};

const getAll = createAsyncThunk<{ results: IMovie[]}, number>(
    'moviesSlice/getAll',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getAll(page);
            return data
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
                const {results} = action.payload;
                state.movies = results


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