import { useState, useEffect } from "react";
function DApp() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Effect started:", count);
        return () => {
            console.log("Cleanup:", count);
        }
    }, [count])
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    )
}
export default DApp;