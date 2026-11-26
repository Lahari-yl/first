import { useState,memo, useCallback } from "react";
const Child=memo(function Child({handle}){
    console.log("hii")
    return(
        <>
        <button onClick={handle}>click</button>
        </>
    )
}
)
function WParent(){
    const[count,setcount]=useState(0)
    let handle=(()=>{
        console.log("hello")
    })
    return(
        <>
        <h3>parent</h3>
        <button onClick={()=>setcount(count+1)}>inc</button>
        <h2>count:{count}</h2>
        <Child handle={handle} />
        </>

    )
}
export default WParent