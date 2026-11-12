import usercontext from "./usercontext";
import { useState } from "react";
import C from "./child"
function P(){
    const[name,setname]=useState("john")
    return(
        <usercontext.Provider value={{name,setname}}>
            <C />
        </usercontext.Provider>
    )
}
export default P