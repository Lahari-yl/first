import { useMemo, useState } from "react";
function Number(){
    const[count,setcount]=useState(0)
    const[number,setnumber]=useState(5)
    let square=useMemo(()=>{
        console.log("calculate square")
        return number*number
    },[number])
    return(
        <>
        <h2>number Square</h2>
        <h2>count:{count}</h2>
        <button onClick={()=>setcount(count+1)}>CountINC</button>
        <h3>square:{square}</h3>
        <h3>number:{number}</h3>
        <button onClick={()=>setnumber(number+1)}>numberINC</button>
        </>
    )
}
export default Number