import { configureStore } from "@reduxjs/toolkit";
import mulReducer from "./mulslicer.jsx";
const store = configureStore({
    reducer: {
        mul: mulReducer
    }
});

export default store;