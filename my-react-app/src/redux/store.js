import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./payload";

const store = configureStore({
    reducer: {
        pay: nameReducer
    }
});

export default store;