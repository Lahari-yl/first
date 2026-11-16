import { createSlice } from "@reduxjs/toolkit";

const payload = createSlice({
    name: "user",
    initialState: {
        name: "john"
    },
    reducers: {
        change: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { change } = payload.actions;

export default payload.reducer;