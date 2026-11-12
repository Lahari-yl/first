import C from './child'
function P(){
    let a=10
    return(
        <>
        <h1>parent</h1>
        <C value={a} />
        </>
    )
}
export default P