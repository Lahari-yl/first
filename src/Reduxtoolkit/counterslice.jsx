import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        add:(state)=>{
            state.count+=1
        },
        sub:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
export const {add,sub,reset}=slice.actions
export default slice.reducer;