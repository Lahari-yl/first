import { useEffect } from "react"

function Login({value}){
    let handlesubmit =(e)=>{
        e.preventDefault()
        value()

    }
    useEffect(()=>{
        console.log("login")
    },[])
    let handlechange=()=>{
        console.log("changed")
    }
    return (
        <>
        <h1>enter login details</h1>
        <input type="text" onChange={handlechange}></input>
        <input type="password"></input>
        <form onSubmit={handlesubmit}>
            ....
            <button type="submit">login</button>
        </form>

        </>
    )
}
export default Login