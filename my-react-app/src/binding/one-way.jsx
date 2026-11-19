import { useState } from "react";

function One (){
    let [name,setname]=useState("john")
    console.log(name)
    return(
        <>
        <h1>one-way binding</h1>
        <h3>Name:{name}</h3>
        </>
    )
}
export default One