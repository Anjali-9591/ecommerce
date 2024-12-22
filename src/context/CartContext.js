import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity < 1) {
            removeFromCart(itemId)
        } else {
            setCartItems(cartItems.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            ));
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateQuantity, clearCart };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};