import Dashboard from "./dashboard";
import Student from "./student";
import Faculty from "./faculty";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./login";
function Approuter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="student" element={<Student/>}/>
                <Route path="faculty" element ={<Faculty/>}/>
                </Route>
            
        </Routes>
        </BrowserRouter>
    )
}
export default Approuter