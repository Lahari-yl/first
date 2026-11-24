import { useNavigate } from "react-router-dom";
function Faculty(){
    const navigate=useNavigate()
    function nav(){
        navigate("/student")
    }
    return(
        <>
        <h2>facylty page</h2>
        <button onClick={ nav}>student</button>
        </>
    )
}
export default Faculty