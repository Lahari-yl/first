import { useEffect, useState } from "react"

function Event(){
    let[a,seta]=useState("")
    useEffect(()=>{
        console.log(a)
    },[a])
    function handleclick(){
        console.log("clicked")
    }
    function handlechange(e){
        console.log("changed")
        //console.log(b.target.value)
        seta(e.target.value)
    }
    let handlesubmit =(e)=>{
        e.preventDefault()
        console.log("submit")
    }
    return(
        <>
        <h1>Event handling :{a}</h1>
        <form onSubmit={handlesubmit}>
        <input type="text" value ={a} onChange={handlechange} />
        <button type="submit">submit</button>
        <button onClick={handleclick} >click</button>
        </form>
        </>
    )
}
export default Event