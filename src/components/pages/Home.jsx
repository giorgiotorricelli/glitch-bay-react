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

        <main className="homepage-main container-sm">
            <div className="">
                <ProductList products={products}/>
            </div>
            
        </main>
    )
}
export default Home;