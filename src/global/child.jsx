import { useContext } from "react";
import usercontext from "./usercontext";
function C(){
    const{name,setname}=useContext(usercontext)
    return(
        <>
        <h1>child name:{name}</h1>
        </>
    )
}
export default C