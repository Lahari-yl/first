import { useNavigate } from "react-router-dom"

function Faculty(){
    const navigate=useNavigate()
    function nav(){
        navigate(-1)
    }
    return (
        <>
        <h3>Faculty details</h3>
        <button onClick={nav}>change</button>
        </>
    )
}
export default Faculty