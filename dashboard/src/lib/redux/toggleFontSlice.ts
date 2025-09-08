import { createSlice } from "@reduxjs/toolkit";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

const initialState = {
    fontbar: false,
    selectedFont: inter
}

const toggleFontSlice = createSlice({
    name: 'fontbar',
    initialState: initialState,
    reducers: {
        toggleFontBar(state) {
            state.fontbar = !state.fontbar
        } ,
        updateFont(state, actions) {
            state.selectedFont = actions.payload
        }
    }
})

export default toggleFontSlice.reducer;
export const toggleBarActions = toggleFontSlice.actions;