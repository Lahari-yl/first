import { memo, useCallback, useState } from "react"
const Child = memo(function Child({ handleClick }) {
    console.log("Child rendered");
    return (
        <button onClick={handleClick}>
            Click Child
        </button>
    );
})
function MApp() {
    const [count, setCount] = useState(0)
    const  handleClick=useCallback(()=> {
        console.log("Button clicked")
    },[])
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <Child handleClick={handleClick} />
        </>
    );
}
export default MApp;