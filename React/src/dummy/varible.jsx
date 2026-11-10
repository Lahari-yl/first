function Var(){
    let name="john"
    let age =21
    let click=()=>{
        age=23
        console.log(age)
    }
    return (
        <>
        <h2>name:{name}</h2>
        <h2>
            age:{age}
        </h2>
        <button onClick={click}>click</button>
        </>
    )
}
export default Var