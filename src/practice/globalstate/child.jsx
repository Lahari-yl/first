
import { useContext} from "react";
import UserContext from "../usercontex";
function C(){
    const{name}=useContext(UserContext)
    return(
        <>
        <h1>Name:{name}</h1>
        </>
    )
}
export default C