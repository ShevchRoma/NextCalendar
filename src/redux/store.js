import { configureStore } from "@reduxjs/toolkit"
import eventSlice from "./features/event-slice"
import { persistReducer } from 'redux-persist'
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'



const reducers = combineReducers({
    events: eventSlice
});

const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
})







