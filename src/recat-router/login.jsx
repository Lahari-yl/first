import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate("/dashboard");
    }
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>
                Login
            </button>
        </>
    );
}
export default Login;