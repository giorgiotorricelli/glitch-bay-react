import { useEffect } from "react";
import ProductList from "../ProductList";
import { useState } from "react";
import { fetchFive } from "../../utils/fetch";

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchFive().then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Errore nel recupero prodotti:", err));
    }, [])
    
    return (

        <main className="homepage-main">
            <div className="container-xs">
                <ProductList products={products} displayed={'home'}/>
            </div>
            
        </main>
    )
}
export default Home;