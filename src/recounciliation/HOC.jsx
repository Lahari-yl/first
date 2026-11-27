function HOC(Component) {
    return function NewComponent(props) {
        return (
            <>
                <h1>Welcome to My College</h1>
                <Component {...props} />
            </>
        )
    }
}
export default HOC;