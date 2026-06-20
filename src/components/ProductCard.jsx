

function ProductCard({ product }) {
  return (
    <div className="card col-xs-6 col-md-4 col-lg-3 g-3">
      <div className="card-body">
        <img src={image} alt="product-img" className="img-fluid"/>
        <h5 className="card-title">Product Card</h5>
        <h3>Price</h3>
        <p className="card-text">This is a simple product card.</p>
      </div>
    </div>
  )
}

export default ProductCard;