import { useNavigate } from "react-router-dom"
function Home(){
    const navigate=useNavigate()
    function click(){
        navigate("/dashboard/contact")
    }
    return (
        <div style={{backgroundColor:"pink",border:"10px solid black"}}>
        <h2>Welcome to the home page</h2>
        <button onClick={click}>contact</button>
        
        </div>
    )
}
export default Home