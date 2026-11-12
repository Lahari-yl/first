import { useState } from "react";

function Use(){
    const[a,seta]=useState({name:"john",age:21})

    let click=()=>{
        seta({...a,age:23,name:"kamal"})

    }
    return(
        <>
        <h1>Details:</h1>
        <h2>{a.name}</h2>
        <h2>{a.age}</h2>
        <button onClick={click}>click</button>
        </>
    )
}
export default Use