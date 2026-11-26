import { useState,useMemo } from "react";
function Student(){
    const[count,setcount]=useState(0)
    const[marks,setmarks]=useState([23,54,36])
    let total=useMemo(()=>{
        return marks.reduce((sum,mark)=>sum+mark,0)
    },[marks])
    return(
        <>
        <h2>count:{count}</h2>
        <h2>total:{total}</h2>
        <button onClick={()=>{total}}>total</button>
        <button onClick={()=>setcount(count+1)}>INC</button>
        </>
    )
}
export default Student