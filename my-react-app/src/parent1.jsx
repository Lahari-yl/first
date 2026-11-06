import C1 from "./child1"
function P1(){
    const name="john"
    const age=21
    return(
        <>
        <h2>details</h2>
        < C1 name={name}age={age} />
        </>
    )

}
export default P1