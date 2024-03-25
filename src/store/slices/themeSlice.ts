import {createSlice} from "@reduxjs/toolkit";

interface IState {
    mode: 'light' | 'dark';
}

const initialState: IState = {
    mode: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const {toggleTheme} = themeSlice.actions;

const {reducer: themeReducer} = themeSlice;

export {
    themeReducer
}