import React from 'react';

const QuantityButton = ({ quantity, onIncrement, onDecrement }) => {
    return (
        <div>
            <button onClick={onDecrement} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};

export default QuantityButton;