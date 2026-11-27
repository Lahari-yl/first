import { useState,useRef } from "react";
function Button(){
    const count=useRef(0)
    function change(){
        count.current++
        console.log(count.current)
    }
    return(
        <>
        <h2>useref button</h2>
        <h2>count:{count.current}</h2>
        <button onClick={change}>INC</button>
        </>
    )
}
export default Button