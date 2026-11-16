import { useState } from "react";
function Ternary(){
    function Login(){
        return <h2>user login</h2>
    }
    function Home(){
        return <h2>welcome</h2>
    }
    const [login,setlogin]=useState(false)
    return(
        <>
        <h3>login page</h3>
        <button onClick={()=>setlogin(true)}>login</button>
        {login?<Home />:<Login />
        }
        </>
    )
}
export default Ternary