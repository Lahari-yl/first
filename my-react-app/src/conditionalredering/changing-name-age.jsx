import { useState } from "react";
function Change(){
    const[use,setuser]=useState({
        name:"john",
        age:21
    })
    return(
        <>
        <h2>username:{use.name}</h2>
        <h2>userage:{use.age}</h2>
        <button onClick={()=>{setuser({...use,name:"kamal"})}}>Name</button>
        <button onClick={()=>{setuser({...use,age:24})}}>Age</button>
        </>
    )
}
export default Change