import { useState } from "react"
function RApp() {
    const [count, setCount] = useState(0);
    console.log("App rendered")
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <Child />
        </>
    );
}
function Child() {
    console.log("Child rendered");
    return <h2>This is Child Component</h2>;
}
export default RApp;