import { Link } from "react-router-dom";
import { EyeFill } from "react-bootstrap-icons";

function ProductCard({ product, displayed }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex g-4"> {/* 1. d-flex sulla colonna */}
            <div className="cyber-card w-100"> {/* 2. w-100 (e la tua classe cyberpunk) */}
                <div className="card-body d-flex flex-column"> {/* 3. d-flex e flex-column sul body */}

                    <img src={product.img} alt="product-img" className="img-fluid mb-3 product-img" />

                    <h5 className="card-title p-font prod-name-wrapper">{product.name}</h5>

                    <div className="price-wrapper p-font">
                        <h3>${product.price}</h3>
                    </div>

                    {displayed === 'product-detail' ? <div className="mt-auto">
                        <p className="card-text p-font">{product.description}</p>
                    </div> : null}

                    {displayed !== 'product-detail' ? 
                    <Link to={`/products/${product.slug}`} className="btn mt-3 explore-btn"><EyeFill className="explore-eye"/></Link>
                    : null}
                    

                </div>
            </div>
        </div>

    )
}

export default ProductCard;