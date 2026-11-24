import {createSlice} from "@reduxjs/toolkit"
const marksslice=createSlice({
    name:"marks",
    initialState:{
        marks:56
    },
    reducers:{
        add:(state,action)=>{
            state.marks+=action.payload
        },
        sub:(state,action)=>{
            state.marks-=action.payload
        },
        reset:(state)=>{
            state.marks=56
        }

    }
})
export const {marks,add,sub,reset}=marksslice.actions
export default marksslice.reducer