import usename from "./usename";

function Name(){
    const{name,changename,changeage}=usename()
    return(
        <>
        <h2>person details:</h2>
        <h3>Name:{name.name}</h3>
        <h3>Age:{name.age}</h3>
        <button onClick={changename}>change Name</button>
        <button onClick={changeage}>change Age</button>
        </>
    )
}
export default Name