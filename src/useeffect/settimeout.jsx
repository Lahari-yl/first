import { useState, useEffect } from "react";
function SetApp() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello");
        }, 2000)
        return () => {
            clearTimeout(timer);
            console.log("Timer stopped");
        }
    }, [])
    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}
export default SetApp;