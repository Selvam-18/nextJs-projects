import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        toggleModal(state) {
            state.isModal = !state.isModal
        }
    }
})

export default modalSlice.reducer;
export const addListActions = modalSlice.actions;