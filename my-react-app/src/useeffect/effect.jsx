import { useEffect,useState } from "react";
function Effect(){
    const[a,seta]=useState([])
    useEffect(()=>{
        console.log(a)
    },[])
    useEffect(()=>{
        console.log("hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=>d.json())
        .then((d)=>seta(d))
    },[])
    return (
        <><h1>A</h1>
        {a.map((b)=>{
            return(
            <div key={b.id}>
                <h4>{b.title}</h4>
                <h4>{b.id}</h4>
            </div>
            )
        })}
        <button onClick={()=>seta(a+1)}>click</button>
        </>
    )
}
export default Effect