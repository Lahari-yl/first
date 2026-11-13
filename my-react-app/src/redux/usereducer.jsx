import { useReducer } from "react";
function reducer(state,action){
    switch(action.type){
        case "inc":
            return  state+1
        case "dec":
            return state-1
        case "reset":
            return state=0

    }
}
function A(){
    const[a,dispatch]=useReducer(reducer,0)
    return(
        <>
        <h1>use reduce:{a}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>increase</button>
        <button onClick={()=>dispatch({type:"dec"})}>decrease</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </>
    )
}
export default A