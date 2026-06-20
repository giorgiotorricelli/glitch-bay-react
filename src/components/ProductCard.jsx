

function ProductCard({ product }) {
  return (
    <div className="card col-xs-6 col-md-4 col-lg-3 g-3">
      <div className="card-body">
        <img src={product.img} alt="product-img" className="img-fluid" />
        <h5 className="card-title">{product.name}</h5>
        <h3>${product.price}</h3>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard;