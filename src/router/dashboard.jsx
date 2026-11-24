import { Link,Outlet,useOutlet } from "react-router-dom";
function Dashboard(){
    return (
        <>
        <h2>Dashboard</h2>
        <Link to="student">Student</Link>
        <br/>
        <Link to="faculty">Faculty</Link>
        <hr/>
        <Outlet/>
        <hr/>
        </>

    )
}
export default Dashboard