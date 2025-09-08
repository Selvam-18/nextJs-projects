import { configureStore } from '@reduxjs/toolkit';

import toggleSlice from '../redux/toggleSlice';
import toggleProfileSlice from "./toggleProfileSlice";
import toggleModal from './addListSlice';
import addTask from './addTaskSlice';
import toggleFontSlice from './toggleFontSlice'

const store = configureStore({
    reducer: {
        sidebar: toggleSlice,
        profilebar: toggleProfileSlice,
        modal: toggleModal,
        task: addTask,
        fontBar: toggleFontSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
