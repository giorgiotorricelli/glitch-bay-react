import { createContext, useState, useEffect, useContext } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    // Inizializza lo stato leggendo dal localStorage
    const [wishlist, setWishlist] = useState(() => {
        const localData = localStorage.getItem("glitch_bay_wishlist");
        return localData ? JSON.parse(localData) : [];
    });

    // Salva i dati nel localStorage ogni volta che la wishlist cambia
    useEffect(() => {
        localStorage.setItem("glitch_bay_wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // FUNZIONE CORRETTA: Aggiunge o rimuove il prodotto (Toggle)
    const toggleWishlist = (product) => {
        setWishlist((prev) => { // <--- CORRETTO QUI (era setCartWishlist)
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.filter((item) => item.id !== product.id); // Rimuove se esiste già
            }
            return [...prev, product]; // Aggiunge se è nuovo
        });
    };

    // Verifica se un prodotto è già presente nei preferiti
    const isInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}