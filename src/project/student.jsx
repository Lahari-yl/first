import { useState } from "react"

function Student(){
    const[name,setname]=useState("jyo")
    function details(){
        setname("john")
    }
    return(
        <>
        <h3>This is student page</h3>
        <h3>Name:{name}</h3>
        <button onClick={details}>changename</button>
        </>
    )
}
export default Student