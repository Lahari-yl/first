import { useState } from "react";

function State(){
    const[a,seta]=useState(10)
    let click=()=>{
        seta(20)
    }
    return(
        <>
        <h2>button:{a}</h2>
        <button onClick={click}>Click me:{seta}</button></>
    )
}
export default State