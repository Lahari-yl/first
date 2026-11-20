import { useState } from "react";

function useage(){
    const[age,setage]=useState(21)
    function Inc(){
        setage(age+1)
    }
    function Dec(){
        setage(age-1)
    }
    function Reset(){
        setage(21)
    }
    return{
        age,Inc,Dec,Reset
    }

}
export default useage