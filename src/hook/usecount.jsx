import { useState } from "react";

function usecount(){
    const[count,setcount]=useState(0)
    const [data,setdata]=useState({})
    function Inc(){
        setcount(count+1)
    }
    function Dec(){
        setcount(count-1)
    }
    function Data(){
        setdata({name:"john",age:21})
    }
    return{
        count,data,Inc,Dec,Data
    }
}
export default usecount