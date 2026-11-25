import { useEffect,useState } from "react";
function Api(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((result)=>setdata(result))
        console.log(data)
    },[])
    return(
        <>
        <h3>user details:</h3>
        {data.map((item) => (
                <h2 key={item.id}>{item.name}</h2>
            ))}
        </>
    )
}
export default Api