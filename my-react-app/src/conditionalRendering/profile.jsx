import { useState } from "react"
import Login from "./login"
import Signup from "./signup"

function Profile(){
    //const [status,setstatus]=useState("new")
    const[ exist,setexist]=useState(false)
    const[login,setlogin]=useState(false)
    let changeLogin =()=>{
        setlogin(true)
    }
    return(
        <>
        {login ? <div><h1>profile</h1>
        </div> : exist? < Login value={changeLogin}/> :<Signup/>}
       
        {
            login?<button onClick={()=>setlogin(false)}>Logout</button>:
            exist ? <div>
            <p> new user</p>
            <button onClick={()=>setexist(false)}>signup</button>
            </div> :
            <div>
            <p>please login</p>
            <button onClick={()=>setexist(true)}>login</button>
            </div>
        }
         </>

    )
}
export default Profile