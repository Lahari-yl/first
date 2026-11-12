import { useState } from "react";
function Use(){
    const[a,seta]=useState(10)
    return(
        <>
        <h1>value:{a}</h1>
        <button onClick={()=>seta(20)}>click</button>
        </>
    )
}
export default Use