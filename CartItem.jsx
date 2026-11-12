import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="cart-item">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item-details">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Unit Price: ${item.price}</p>
                            <p>Total Cost: ${item.price * item.quantity}</p>
                            <button onClick={() => handleIncrement(item)}>+</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleDecrement(item)}>-</button>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    ))}
                    <h2>Total Amount: ${calculateTotalAmount()}</h2>
                    <button className="get-started-button">Checkout (Coming Soon)</button>
                    <button className="get-started-button">Continue Shopping</button>
                </div>
            )}
        </div>
    );
}

export default CartItem;
