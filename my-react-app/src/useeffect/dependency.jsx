import { useState,useEffect } from "react";
function DEPEN(){
    const[num,setnum]=useState(10)
    const[name,setname]=useState("")
    useEffect(()=>{
        console.log("Name :",name)
        console.log("Age :",num)
    },[num])
    return(
        <>
        <h1>Dependency</h1>
        <h1>Age:{num}</h1>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={()=>setnum(num+1)}>Age</button>
        </>
    )
}
export default DEPEN