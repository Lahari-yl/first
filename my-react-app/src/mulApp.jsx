import { useSelector, useDispatch } from "react-redux";
import { mul1, mul2, mul3,mul0 } from "./redux/mulslicer.jsx";
function App() {
    const mul = useSelector((state) => state.mul.count);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Redux Multiplication</h1>
            <h2>Initial Value: {mul}</h2>
            <button onClick={() => dispatch(mul1())}>
                Multiply by 1
            </button>
            <button onClick={() => dispatch(mul2())}>
                Multiply by 2
            </button>
            <button onClick={() => dispatch(mul3())}>
                Multiply by 3
            </button>
            <button onClick={ ()=> dispatch(mul0())}>multiply 0</button>
        </>
    );
}
export default App;