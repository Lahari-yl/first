import { useState,memo } from "react";
const Child=memo(function Child({name}){
    return(
        <>
        <h3>hello:{name}</h3>
        </>
    )
})
function P(){
    const[name,setname]=useState("devid")
    return(
        <>
        <button onClick={()=>setname("john")}>change</button>
        <Child name={name}/>
        </>
    )
}
export default P