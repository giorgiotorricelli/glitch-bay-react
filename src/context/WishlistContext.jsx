import { createContext, useState, useEffect, useContext } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    // Inizializza lo stato leggendo dal localStorage
    const [wishList, setWishList] = useState(() => {
        const localData = localStorage.getItem("glitch_bay_wishlist");
        return localData ? JSON.parse(localData) : [];
    });

    // Salva i dati nel localStorage ogni volta che la wishlist cambia
    useEffect(() => {
        localStorage.setItem("glitch_bay_wishlist", JSON.stringify(wishList));
    }, [wishList]);

    const addWishHandler = (product, isAdding) => {
        if (isAdding) {
            setWishList((prev) => {
                if (prev.some((item) => item.slug === product.slug)) return prev;
                return [...prev, product];
            });
        } else {
            setWishList((prev) => prev.filter((item) => item.slug !== product.slug));
        }
    };

    return (
        <WishlistContext.Provider value={{ wishList, setWishList, addWishHandler }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}