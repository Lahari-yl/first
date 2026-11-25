import { useEffect, useState } from "react";
function Use(){
    const[count,setcount]=useState(10)
    useEffect(()=>{
        console.log("clicked")
    })
    return(
        <>
        <h3>
            count:{count}
        </h3>
        <button onClick={()=>setcount(count+1)}>click</button>
        <button onClick={()=>setcount(count-1)}>dec</button>
        <button onClick={()=>setcount(0)}>reset</button>
        </>
    )
}
export default Use