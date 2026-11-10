import C from "./child"
import { useState } from "react"
function P(){
    const[a,setValue]=useState(20)
    return(
        <>
        <h2>parent {a}</h2>
        <C value={a}/>
        </>
    )
}
export default P