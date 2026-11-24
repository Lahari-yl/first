import { useNavigate } from "react-router-dom"
function Login(){
    const navigate=useNavigate()
    function log(){
        navigate("/dashboard")

    }
    return(
        <>
        <h1>Login page</h1>
        <button onClick={log}>login</button>
        </>
    )
}
export default Login