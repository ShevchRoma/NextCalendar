import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: []
}

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events = [...state.events, action.payload]
        },
        deleteEvent: (state, action) => {
            console.log(action.payload)
            state.events.splice(state.events.findIndex(event => event.title === action.payload), 1);
        }
    }
})

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;