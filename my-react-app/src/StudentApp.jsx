import { useSelector,useDispatch } from "react-redux";
import { addmarks } from "./redux/student";
function SApp(){
    const total=useSelector((state)=>state.marks.total)
    const dispatch=useDispatch()
    return(
        <><h1>stuent marks:{total}</h1>
        <button onClick={()=>dispatch(addmarks(5))}>Add marks 5</button>
        </>
    )
}
export default SApp