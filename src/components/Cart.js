import React from 'react';
import { useCart } from '../context/CartContext';
import QuantityButton from './QuantityButton'

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (<p>Your cart is empty</p>) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} width='50px' height='50px'/>
                            {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                            <QuantityButton quantity={item.quantity} onIncrement={() => updateQuantity(item.id, item.quantity + 1)} onDecrement={() => updateQuantity(item.id, item.quantity - 1)} />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;