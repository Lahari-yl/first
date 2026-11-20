import { useState } from "react";

function usepara(){
    const[para,setpara]=useState(" ")
    function show(){
        setpara("this is paragraph to show")
    }
    function hide(){
        setpara("")
    }
    return {
        para,show,hide
    }
}
export default usepara