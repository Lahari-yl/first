import { useContext } from "react";
import UserContext from "./usercontex";
function Child2() {
    const { name,age } = useContext(UserContext);
    return (
        <>
            <h2>Child 2</h2>
            <h3>Name: {name}</h3>
            <h2>Age:{age}</h2>
        </>
    );
}
export default Child2;