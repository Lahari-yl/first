import { useNavigate } from "react-router-dom";
function Student(){
    const navigate=useNavigate()
    function nav(){
        navigate("/faculty")
    }
    return(
        <>
        <h2>student page</h2>
        <button onClick={nav}>faculty</button>
        </>
    )
}
export default Student