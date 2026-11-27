import { useState } from "react";
function Count(){
    const[count,setcount]=useState(0)
    console.log("print")
    return(
        <>
        <h2>Hello</h2>
        <h2>welcome</h2>
        <h2>Count:{count}</h2>
        <button onClick={()=>setcount(count+1)}>INC</button>
        </>
    )
}
export default Count