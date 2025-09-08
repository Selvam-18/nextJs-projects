import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false
}

const toggleSlice = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar = !state.sidebar
        }
    }
})

export default toggleSlice.reducer;
export const sidebarAction = toggleSlice.actions;