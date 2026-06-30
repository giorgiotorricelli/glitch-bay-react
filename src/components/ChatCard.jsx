import { Link } from "react-router-dom"

function ChatCard({product}) {
  const displayPrice =  product.price.replace('.', ',');

    return (
        <Link
            to={`/products/${product.slug}`}
            className="cyber-card w-50 d-flex m-3 flex-column justify-content-between text-decoration-none text-white h-100 p-0"
            style={{ display: 'block' }}
        >
            <div className="card-body d-flex flex-column p-3 w-100">

                <div className="d-flex flex-column flex-grow-1">

                    {/* Titolo / Nome Prodotto */}
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-1 w-100">
                        <h5 className="card-title p-font prod-name-wrapper mb-0 text-center text-white">
                            {product.name}
                        </h5>
                    </div>

                    {/* Descrizione del Prodotto */}
                    {product.description && (
                        <p className="text-white small mb-2 text-center text-truncate-2-lines"
                            style={{ 
                                display: '-webkit-box', 
                                WebkitLineClamp: 2, 
                                WebkitBoxOrient: 'vertical', 
                                overflow: 'hidden', 
                                color: '#fff' 
                            }}
                        >
                            {product.description}
                        </p>
                    )}

                    {/* Prezzo (Visualizzato come stringa semplice) */}
                    <div className="price-wrapper p-font d-flex align-items-center justify-content-center w-100">
                        <h3 className="mb-0">
                            {displayPrice.includes('€') ? displayPrice : `${displayPrice}€`}
                        </h3>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default ChatCard