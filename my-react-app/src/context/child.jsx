import { useContext } from "react";
import UserContext from "./usercontext";
function Child(){
    const{name,age}=useContext(UserContext)
    return(
        <>
        <h1>child component:</h1>
        <h2>name:{name},age:{age}</h2>
        </>
    )

}
export default Child