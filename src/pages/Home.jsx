import { useState, useEffect } from "react";
import ProductList from "../components/ProductList.jsx";

function Home() {
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
        <>
            <h1>Prodotti</h1>

            <ProductList products={products} />
        </>
    )
}
export default Home;