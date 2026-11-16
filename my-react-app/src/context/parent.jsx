import { useState } from "react";
import UserContext from "./usercontext";
import Child from "./child";
function Parent() {
    const [name, setName] = useState("Lahari")
    const [age, setAge] = useState(22)
    function changeDetails() {
        setName("Kamal")
        setAge(25)
    }
    return (
        <UserContext.Provider value={{ name, age }}>
            <h1>Parent Component</h1>
            <button onClick={changeDetails}>
                Change Name and Age
            </button>
            <Child />
        </UserContext.Provider>
    )
}
export default Parent;