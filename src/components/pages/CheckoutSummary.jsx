import React from 'react';
import { useCart } from '../../context/CartContext';

function CheckoutSummary() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
    };

    if (cart.length === 0) {
        return <div>Il tuo carrello è vuoto.</div>;
    }
    return (
        <div className="checkout-summary">
            <h2>Riepilogo Ordine</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.slug}>
                        <p>{item.name}</p>
                        <p>Prezzo: €{item.price}</p>
                        <span> Quantità: {item.quantity} </span>
                        <button onClick={() => removeFromCart(item.slug)}>Rimuovi</button>
                    </li>
                ))}
            </ul>

            <div className="total">
                <h3>Totale: €{totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default CheckoutSummary;