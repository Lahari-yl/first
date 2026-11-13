import { createSlice } from "@reduxjs/toolkit";
const creater=createSlice({
    name:"marks",
    initialState:{
        total:45
    },
    reducers:{
        addmarks:(state,action)=>{
            state.total+=action.payload

        }
    }
})
export const {addmarks}=creater.actions
export default creater.reducer