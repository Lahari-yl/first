
import { useState } from "react";
import Emp from "./employee";
import Admin from "./admin";
import Hr from "./hr";
import Manager from "./manager";

function Login1() {

    const [page, setPage] = useState("home");

    return (
        <>
            {page === "home" ? (
                <div>
                    <h1>Choose Your Role</h1>

                    <button onClick={() => setPage("emp")}>
                        Employee click
                    </button>

                    <button onClick={() => setPage("admin")}>
                        Admin click
                    </button>

                    <button onClick={() => setPage("hr")}>
                        HR click
                    </button>

                    <button onClick={() => setPage("manager")}>
                        Manager click
                    </button>
                </div>
            ) : page === "emp" ? (
                <Emp />
            ) : page === "admin" ? (
                <Admin />
            ) : page === "hr" ? (
                <Hr />
            ) : (
                <Manager />
            )}
        </>
    );
}

export default Login1;
