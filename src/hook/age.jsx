import useage from "./useage"
function Age(){
    const{age,Inc,Dec,Reset}=useage()
    return(
        <>
        <h1>person age:{age}</h1>
        <button onClick={Inc}>Increase</button>
        <button onClick={Dec}>Decrease</button>
        <button onClick={ Reset}>Reset</button>
        </>
    )
}
export default Age