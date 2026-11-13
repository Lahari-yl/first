import { createSlice } from "@reduxjs/toolkit";
const mulslice = createSlice({
    name: "mul",
    initialState: {
        count: 2
    },
    reducers: {
        mul1: (state) => {
            state.count *= 1;
        },
        mul2: (state) => {
            state.count *= 2;
        },
        mul3: (state) => {
            state.count *= 3;
        },
        mul0:(state)=>{
            state.count *=0
        }
    }
});
export const { mul1, mul2, mul3 ,mul0} = mulslice.actions;
export default mulslice.reducer;