import { Routes, Route, Navigate } from "react-router-dom";
import Student from "./student";
import Faculty from "./faculty";
import Dashboard from "./dashboard";
import Login from "./login";
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="student" element={<Student />} />
                <Route path="faculty" element={<Faculty />} />
            </Route>
        </Routes>
    );
}
export default AppRouter;