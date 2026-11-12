import { useContext } from "react";
import UserContext from "./usercontex";
function Child1() {
    const { name,age } = useContext(UserContext);
    return (
        <>
            <h2>Child 1</h2>
            <h3>Name: {name}</h3>
            <h3>Age:{age}</h3>
        </>
    );
}
export default Child1;