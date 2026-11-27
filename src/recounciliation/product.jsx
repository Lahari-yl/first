import { useRef } from "react";
function Product() {
    const detailsRef = useRef(null);
    function showDetails() {
        detailsRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }
    return (
        <>
            <h2>Mobile Phone</h2>
            <button onClick={showDetails}>
                View Details
            </button>
            <div style={{ height: "500px" }}></div>
            <div ref={detailsRef}>
                <h2>Product Details</h2>
                <p>Price: ₹20,000</p>
                <p>Brand: Samsung</p>
            </div>
        </>
    );
}
export default Product;