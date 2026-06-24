import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    // Inizializza lo stato leggendo dal localStorage (se esiste)
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem("glitch_bay_cart");
        return localData ? JSON.parse(localData) : [];
    });

    // Ogni volta che il carrello cambia, salva i dati nel localStorage
    useEffect(() => {
        localStorage.setItem("glitch_bay_cart", JSON.stringify(cart));
    }, [cart]);

    /* Qty Handlers */
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.slug === product.slug);
            const amountToAdd = product.quantity || 1;
            if (existingItem) {
                return prevCart.map((item) =>
                    item.slug === product.slug
                        ? { ...item, quantity: item.quantity + amountToAdd }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: amountToAdd }];
        });
    };

    const increaseQuantity = (productslug) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.slug === productslug ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productslug) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.slug === productslug ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Rimuove un elemento specifico dal carrello
    const removeFromCart = (productSlug) => {
        setCart((prevCart) => prevCart.filter((item) => item.slug !== productSlug));
    };

    // Svuota completamente il carrello
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizzato per un utilizzo rapido nei componenti
export function useCart() {
    return useContext(CartContext);
}