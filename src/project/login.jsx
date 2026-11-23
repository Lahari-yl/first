import { useNavigate } from "react-router-dom";
function Login(){
    const usenavigate=useNavigate()
    function handle(){
        usenavigate("/dashboard")
    }
    return(
        <>
        <h3>login page</h3>
        <button onClick={handle}>Login</button>
        </>
    )
}
export default Login