import { useState } from "react";

function usename(){
    const[name,setname]=useState({
        name:"john",age:21
    })
    function changename(){
        setname({name:"devid",age:21})
    }
    function changeage(){
        setname({name:"david",age:23})
    }
    return{
        name,changename,changeage
    }
}
export default usename