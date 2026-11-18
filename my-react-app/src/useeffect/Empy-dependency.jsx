import { useState,useEffect } from "react";
function Empty(){
    let[count,setcount]=useState(0)
    useEffect(()=>{
        console.log("HII")
    },[])
    return(
        <>
        <h1>Empty dependency</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>setcount(count+1)}>INC</button>
        <button onClick={()=>setcount(count-1)}>DEC</button>
        </>
    )
}
export default Empty