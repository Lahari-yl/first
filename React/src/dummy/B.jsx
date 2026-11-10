import D from "./D"
import { useState } from "react"
function B(){
    const[a,seta]=useState(10)
    return(
        <>
        <h1>B value: {a}</h1>
        <D  value={a}/>
        </>
    )
}
export default B