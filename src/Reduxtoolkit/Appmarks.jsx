import { useDispatch,useSelector } from "react-redux";
import {add,sub,reset} from "./createslice"
function AppM(){
    const marks=useSelector(
        (state)=>state.marks.marks
    )
    const dispatch=useDispatch()
    return(
        <>
        <h1>Marks:{marks}</h1>
        <button onClick={()=>dispatch(add(5))}>add</button>
        <button onClick={()=>dispatch(sub(2))}>sub</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        </>
    )
}
export default AppM