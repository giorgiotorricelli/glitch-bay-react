import React from 'react';
import { useCart } from '../../context/CartContext';

function CheckoutSummary() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return <div>Il tuo carrello è vuoto.</div>;
    }
    return (
        <div className="checkout-summary">
            <h2>Riepilogo Ordine</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
                        <p>{item.name}</p>
                        <p>Prezzo: €{item.price}</p>
                        <div>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span> Quantità: {item.quantity} </span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Rimuovi</button>
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