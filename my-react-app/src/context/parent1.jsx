import UserContext from "./usercontext";
import { useState } from "react";
import C from "./child1"
function P(){
    const[login,setlogin]=useState(false)
    return(
        <UserContext.Provider value={{login,setlogin}}>

        <h1>parent</h1>
        <button onClick={()=>setlogin(!login)}>login/logout</button>
        <C />
        </UserContext.Provider>
    )
}
export default P