import { useState } from "react";
function Two(){
    let [name,setname]=useState("")
    return(
        <>
        <h1>Two-way Binding</h1>
        <h3>Name:{name}</h3>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        </>
    )
}
export default Two