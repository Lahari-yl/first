function Hocstu(Components){
    return function newComponents(props){
        return(
            <>
            <h2>student Details:</h2>
            <Components {...props}/>
            </>
        )
    }
}
export default Hocstu