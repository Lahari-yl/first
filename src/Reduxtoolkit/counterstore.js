import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./counterslice";
const store=configureStore({
    reducer:{
        counter:sliceReducer
    }
})
export default store