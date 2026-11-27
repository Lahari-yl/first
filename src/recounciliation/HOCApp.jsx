import HOC from "./HOC";
function Student(props) {
    return <h2>Student Name: {props.name}</h2>;
}
function Teacher(props) {
    return <h2>Teacher Name: {props.name}</h2>;
}
const EnhancedStudent = HOC(Student);
const EnhancedTeacher = HOC(Teacher);
function HOCApp() {
    return (
        <>
            <EnhancedStudent name="John" />
            <hr />
            <hr/>
            <EnhancedTeacher name="David" />
        </>
    );
}
export default HOCApp;