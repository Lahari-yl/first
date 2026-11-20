import Hoc from "./HOCstudent";
import Stu from "./student";
const Newstu=Hoc(Stu)
function HApp(){
    return(
        <>
        <Newstu />
        </>
    )
    
}export default HApp