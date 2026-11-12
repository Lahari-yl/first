import { createSlice } from "@reduxjs/toolkit";
const studentSlice = createSlice({
    name: "student",
    initialState: {
        name: "Rahul"
    },
    reducers: {
        changeName: (state) => {
            state.name = "Priya";
        }
    }
})
export const { changeName } = studentSlice.actions;
export default studentSlice.reducer;