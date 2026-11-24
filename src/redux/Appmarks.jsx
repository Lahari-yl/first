import { useSelector, useDispatch } from "react-redux";
import { add, sub, reset } from "./actions";

function Appmarks() {
const marks = useSelector((state) => state.marks);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Marks: {marks}</h1>

            <button onClick={() => dispatch(add(5))}>Add</button>
            <button onClick={() => dispatch(sub(2))}>Subtract</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    );
}

export default Appmarks;