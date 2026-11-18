import { useState } from "react";
function Obj(){
    let[stu,setstu]=useState({
    })
    function update(){
        setstu({
            ...stu,
        name:"john",
        age:21
    
    })}
    return (
        <>
        <h3>object</h3>
        <p>if you want details then "click"</p>
        <h3>Name:{stu.name}</h3>
        <h3>Age:{stu.age}</h3>
        <button onClick={update}>click</button>
        </>
    )
}
export default Obj