import { useState } from "react";
import UserContext from "./usercontex";
import Child1 from "./child1";
import Child2 from "./child2";
function App1(){
    const [name,setname]=useState("john")
    const [age,setage]=useState(32)
    return(
        <UserContext.Provider value={{name,age}}>
            <h1>parent</h1>
            <Child1 />
            <Child2 />
        </UserContext.Provider>

    )
}
export default App1