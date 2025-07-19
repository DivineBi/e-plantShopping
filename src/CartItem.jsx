import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericCost = parseFloat(item.cost.replace(/[^\d.-]/g, '')) || 0;
      return total + item.quantity * numericCost;
    }, 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(); // Call the function passed from ProductList to navigate back to the product list
    }  
  };



  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    dispatch(updateQuantity(updatedItem));
    alert(`Incremented ${item.name} quantity to ${updatedItem.quantity}`);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(updateQuantity(updatedItem));
      alert(`Decremented ${item.name} quantity to ${updatedItem.quantity}`);
    } else {
      alert('Cannot decrement below 1');
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    alert(`Removed ${item.name} from the cart`);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace(/[^\d.-]/g, '')) || 0;
    return (item.quantity * numericCost).toFixed(2);    
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {calculateTotalAmount()}€</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: {calculateTotalCost(item)}€</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>Total: {calculateTotalAmount()}€</div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1"
        onClick={() => alert('Chekout is comming soon!')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


