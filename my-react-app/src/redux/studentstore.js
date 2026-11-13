import { configureStore } from "@reduxjs/toolkit";
import createrReducer from "./student";
const Store=configureStore({
    reducer:{
        marks:createrReducer
    }
})
export default Store