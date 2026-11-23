import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate=useNavigate()
    function nav(){
        navigate("/")
    }
    return (
        <><div style={{backgroundColor:"yellow"}}>
            <h1>This is Dashboard</h1>
            <h3>Select Student or Faculty</h3>
            <Link to="student">Student</Link>
            <br />
            <Link to="faculty">Faculty</Link>
            <hr/>
            <Outlet />
            <button onClick={nav}>logout</button>
            </div>
        </>
    );
}

export default Dashboard;