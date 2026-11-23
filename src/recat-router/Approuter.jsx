import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Home from "./home";
import Contact from "./contact";

function AppRouter() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}
export default AppRouter;