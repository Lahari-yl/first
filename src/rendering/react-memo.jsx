import { useState,memo } from "react";
const Child=memo(function Child(){
    console.log("child")
    return(
        <h2>hello child</h2>
    )
})
function Parent(){
    const[count,setcount]=useState(0)
    console.log("parent")
    return(
        <>
        <h3>count:{count}</h3>
        <button onClick={()=>setcount(count+1)}>increase</button>
        <Child/>
        </>
    )
}
export default Parent