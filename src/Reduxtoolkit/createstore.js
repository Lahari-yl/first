import { configureStore } from "@reduxjs/toolkit";
import marksReducer from "./createslice"
const store=configureStore({
    reducer:{
        marks:marksReducer
    }
})
export default store