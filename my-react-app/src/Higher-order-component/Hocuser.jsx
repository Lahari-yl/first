function Hoc(Component){
    return function newComponent(props){
            if(props.login){
                return <Component {...props}/>
            }
                return <h3>please Login</h3>
    }
}
export default Hoc 