import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profilebar: false
}

const toggleProfileSlice = createSlice({
    name: 'profilebar',
    initialState: initialState,
    reducers: {
        toggleprofilebar(state) {
            state.profilebar = !state.profilebar
        }
    }
})

export default toggleProfileSlice.reducer;
export const profilebarAction = toggleProfileSlice.actions;