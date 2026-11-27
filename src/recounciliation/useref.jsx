import { useRef } from "react";
function Ref(){
    const myref=useRef(10)
    console.log(myref.current)
    function change(){
        myref.current=20
        console.log(myref.current)
    }
    return(
        <>
        <h1>useref</h1>
        <h2>{myref.current}</h2>
        <button onClick={change}>change</button>
        </>
    )

}
export default Ref