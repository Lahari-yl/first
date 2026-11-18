import { useState,useEffect } from "react";
function WOD(){
    const[num,setnum]=useState(0)
    useEffect(()=>{
        console.log("hello")
    })
    return(
        <>
        <h1>With-out-dependncy</h1>
        <h3>count:{num}</h3>
        <button onClick={()=>setnum(num+1)}>INCclick</button>
        <button onClick={()=>setnum(num-1)}>DECclick</button>
        </>
    )
}
export default WOD