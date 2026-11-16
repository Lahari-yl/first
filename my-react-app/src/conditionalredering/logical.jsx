import { useState } from "react";
function Logic(){
    const [show,setshow]=useState(false)
    return(
        <>
        <h1>password</h1>
        <button onClick={()=>setshow(!show)}>show/hide</button>
        {show && <h2>password</h2>}
        </>
    )
}
export default Logic