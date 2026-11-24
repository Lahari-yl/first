import { useSelector, useDispatch } from "react-redux";
import { add, sub, reset } from "./counterslice";
function CApp() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(add())}>Add</button>
            <button onClick={() => dispatch(sub())}>Subtract</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    );
}

export default CApp;