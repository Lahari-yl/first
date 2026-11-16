import { useSelector, useDispatch } from "react-redux";
import { change } from "./payload";

function PApp() {

    const name = useSelector((state) => state.pay.name);

    const dispatch = useDispatch();

    return (
        <>
            <h2>Name: {name}</h2>

            <button onClick={() => dispatch(change("kamal"))}>
                Click
            </button>
        </>
    );
}

export default PApp;