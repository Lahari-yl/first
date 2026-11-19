import Footer from "./footer"
import Header from "./header"

function HOC(Component){
    return function newComponent(props){
        return(
            <>
            <Component {...props} />
            <Footer />
            </>
        )
    }
}
export default HOC