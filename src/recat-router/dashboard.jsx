import { Link, NavLink, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <h3>Header</h3>

            <Link to ="home" >Home</Link>
            <br />

            <Link to="contact">Contact</Link>

            <hr />

            <Outlet />

            <hr />

            <h3>Footer</h3>
        </>
    );
}

export default Dashboard;