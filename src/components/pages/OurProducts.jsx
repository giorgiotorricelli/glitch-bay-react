import { useState, useEffect } from "react";
import ProductList from "../ProductList";

function OurProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        console.log("DATA API:", data);
        setProducts(data.results);
    };
    return (
        <main className="products-main">
            <ProductList products={products} />
        </main>
    );
}

export default OurProducts;