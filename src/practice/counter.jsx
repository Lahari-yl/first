import { useState } from "react";
function Count(){
    const[a,seta]=useState(0)
    return(
        <>
        <h1>Button:{a}</h1>
        <button onClick={()=>seta(a+1)}>increase</button>
        <button onClick={()=>seta(a-1)}>decrease</button>
        </>
    )

}
export default Count