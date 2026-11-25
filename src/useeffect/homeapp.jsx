import { useState } from "react";
import Home from "./Home"
function HApp() {
    const [show, setShow] = useState(true);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                Show / Hide
            </button>
            {show && <Home />}
        </>
    )
}
export default HApp;