import { useRef } from "react";
function Input(){
    const name=useRef(null)
    function change(){
        name.current.focus()
    }
    return (
        <>
        <h2>input focus</h2>
        <input ref={name} type="text" placeholder="enter your name"/>
        <button onClick={change}>click</button>
        </>
    )
}
export default Input