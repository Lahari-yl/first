import { useContext } from "react";
import UserContext from "./usercontext";
function C(){
    const{login}=useContext(UserContext)
    return(
        <>
        <h2>child </h2>
        {login?(<h2>welcome user</h2>):(<h2>login user</h2>)}
        </>
    )
}
export default  C