import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slice/CounterSlice';
import userReducer from '../Slice/userSlice' 

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user:userReducer,

    }
})
