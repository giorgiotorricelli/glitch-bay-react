import { useEffect, useState } from "react"
import { fetchSingle } from "../../utils/fetch.js"
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard.jsx";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const { slug } = useParams();
    useEffect(() => {
        fetchSingle(slug).then(product => {
            setProduct(product);
        })
    }, []);
    

  return (
    <div className="container">
        <div className="product-detail-wrapper">
            <ProductCard product={product} displayed={`product-detail`}/>
        </div>
    </div>
    
  )
}

export default ProductDetail