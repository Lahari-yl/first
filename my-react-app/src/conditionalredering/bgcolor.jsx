import { useState } from "react";
function Bcolor(){
    const[color,setcolor]=useState("white")
    return(
        <div style={{backgroundColor:color}}>
            <h1>changing background</h1>
            <button onClick={()=>setcolor("green")}>green</button>
            <button onClick={()=>setcolor("blue")}>blue</button>
        </div>
    )
}
export default Bcolor