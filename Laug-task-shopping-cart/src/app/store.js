import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Features/CounterSlice'

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})