import { useState,useCallback } from "react";
function Show(){
    const[msg,setmsg]=useState("hii")
    console.log("display")
    let click=useCallback(()=>{
        setmsg("welcome user")
    },[])
    return(
        <>
        <h1>Displaying message</h1>
        <h2>Message:{msg}</h2>
        <button onClick={click}>Click</button>
        </>
    )
}
export default Show