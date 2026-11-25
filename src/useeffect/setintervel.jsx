import { useState, useEffect } from "react";
function SApp() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000)
        return () => {
            clearInterval(timer);
            console.log("Timer stopped");
        }
    }, [])
    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}
export default SApp;