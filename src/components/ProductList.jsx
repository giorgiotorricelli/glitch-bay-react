import ProductCard from "./ProductCard";

function ProductList({ products, displayed }) {
    return (
        <div className="container">
            <div className="row products-wrapper">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} displayed={displayed}/>
                ))}
            </div>
        </div>

    )
}
export default ProductList;