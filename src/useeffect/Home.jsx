import { useEffect } from "react"
function Home() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Home component running");
        }, 1000)
        return () => {
            clearInterval(timer);
            console.log("Home component stopped");
        }
    }, [])
    return (
        <>
            <h1>Home Component</h1>
        </>
    )
}
export default Home;