import {  useState } from "react";
import C from "./child";
import UserContext from "../usercontex";
function P() {
    const [name, setname] = useState("john");
    return (
        <UserContext.Provider value={{ name, setname }}>
            <C />
        </UserContext.Provider>
    );
}
export default P;