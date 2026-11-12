function Stu(){
    let marks=92
    function res(){
        if(marks>=90){
            return<h1>A+</h1>
        }
        else{
            return<h1>B+</h1>
        }
    }
    return(
        <>
        <h1>student details</h1>
        {res()}
        </>
    )
}
export default Stu