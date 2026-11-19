import usecount from "./usecount";
function Count(){
    const{count,data,Inc,Dec,Data}=usecount()
    return(
        <>
        <div style={{backgroundColor:"pink",fontStyle:"italic"}}>
        <h1>
            Hook details
        </h1>
        <h2>count:{count}</h2>
        <h2>Name:{data.name}</h2>
        <h2>Age:{data.age}</h2>

        <button onClick={Inc}>Increase</button>
        <button onClick={Dec}>Decrease</button>
        <button onClick={Data}>getdata</button>
        </div>
        </>
    )
}
export default Count