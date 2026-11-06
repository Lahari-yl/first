import { useState } from "react";
function Btn(proms){
    let [a,b]=useState(10)
    let increase=()=>{
        b(a=>a+1)
    }
    let decrease=()=>{
        b(a=>a-1)
    }
    let reset=()=>{
        b(a*0)
    }
    return(
        <>
        <h1>This is button</h1>
        <h1>count:{a}</h1>
        <button onClick={increase}>Increase </button>
        <button onClick={decrease}>Decrease </button>
        <button onClick={reset}>Reset </button>
        </>
    )

}
export default Btn