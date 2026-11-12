import { useReducer } from "react";
function reducer(state,action){
    switch (action.type){
        case "Inc":
            return state+1
        case "Dec":
            return state-1 
        case "Rec":
            return 0
        default:
            return state
    }
}
function Btn(){
    const[count,dispatch]=useReducer(reducer,0)
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>dispatch({type:"Inc"})}>Increase</button>
        <button onClick={()=>dispatch({type:"Dec"})}>Decrease</button>
        <button onClick={()=>dispatch({type:"Rec"})}>Reset</button>
        </>
    )
}
export default Btn