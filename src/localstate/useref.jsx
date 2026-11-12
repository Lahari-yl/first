import { useRef } from "react";
function Fun(){
    const count=useRef(0)
    function inc(){
        count.current++
        console.log(count.current)
    }
    return(
        <>
        <h2>count:{count.current}</h2>
        <button onClick={inc}>click</button>
        </>
    )
}
export default Fun