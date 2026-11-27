import { useRef, useState } from "react";
function TApp() {
    const [count, setCount] = useState(0)
    const timer = useRef(null)
    function start() {
        if (timer.current !== null) return;
        timer.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000)
    }
    function stop() {
        clearInterval(timer.current);
        timer.current = null;
    }
    return (
        <>
            <h1>Timer: {count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    );
}
export default TApp;