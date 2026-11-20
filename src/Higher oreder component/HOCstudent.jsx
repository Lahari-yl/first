import { useState } from "react"

function Hoc(Component){
    return function newcomponent(props){
        const[count,setcount]=useState(false)
        return(
            <>
        {count ? <Component {...props} /> : <h3>pleaseLogin</h3> }
        <button onClick={()=>setcount(!count)}>click</button>
        </>
    )
    }
}
export default Hoc