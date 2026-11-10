import C from "./child"
import C1 from "./child1"
function P(){
    function fun(data){
        console.log(data)
    }
    return(
        <>
        <h1>parent </h1>
        <C v={fun} />
        <C1/>
        </>
    )
}
export default P