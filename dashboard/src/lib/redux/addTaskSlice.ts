import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        heading: 'To-Do',
        tasks: [{
            task: 'Why did i moved here? I guess it was the weather!',
            date: '08-11-2025'
        },
        {
            task: 'Lucia, do you know why you\'re here?',
            date: '04-02-2025'
        },
        {
            task: 'Bad Luck, i guess!',
            date: '30-02-2025'
        }]
    },
    {
        heading: 'Completed',
        tasks: [{
            task: 'Why did i moved here? I guess it was the weather!',
            date: '08-11-2025'
        },
        {
            task: 'Lucia, do you know why you\'re here?',
            date: '04-02-2025'
        },
        {
            task: 'Bad Luck, i guess!',
            date: '30-02-2025'
        }]
    },
    {
        heading: 'In Progress',
        tasks: [{
            task: 'Why did i moved here? I guess it was the weather!',
            date: '08-11-2025'
        },
        {
            task: 'Lucia, do you know why you\'re here?',
            date: '04-02-2025'
        },
        {
            task: 'Bad Luck, i guess!',
            date: '30-02-2025'
        }]
    }

    ]

const addTaskSlice = createSlice({
    name: 'tasklist',
    initialState: initialState,
    reducers: {
        addNewTask(state, actions) {
            state[0].tasks.push(actions.payload)  
        }
    }
})

export default addTaskSlice.reducer;
export const addTaskActions = addTaskSlice.actions;