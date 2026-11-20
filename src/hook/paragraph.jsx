import usepara from "./usepara"
function Para(){
    const{para,show,hide}=usepara()
    return(
        <>
        <h3>show & hide paragraph</h3>
        <h3>{para}</h3>
        <button onClick={show}>show</button>
        <button onClick={hide}>hide</button>
        </>
    )

}
export default Para