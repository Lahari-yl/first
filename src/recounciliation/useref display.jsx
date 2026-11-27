import { useState,useRef,useEffect } from "react";
function Display(){
    const[count,setcount]=useState(0)
    const previous=useRef(0)
    useEffect(()=>{
        previous.current=count
        console.log(previous.current)

    },[count])
    return(
        <>
        <h2>count:{count}</h2>
        <h2>previous count:{previous.current}</h2>
        <button onClick={()=>setcount(count+1)}>INC</button>
        </>
    )
}
export default Display