import { useState } from "react"
function Btn(){
    let[a,setvalue]=useState(0)
    let inc=()=>{
        setvalue(a=>a+1)
    }
    let dec=()=>{
        setvalue(a=>a-1)
    }
    let reset=()=>{
        setvalue(0)
    }
    return(
        <div>
            <h2>Button</h2>
            <h2>count:{a}</h2>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Btn