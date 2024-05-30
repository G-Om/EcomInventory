import React, { useState } from 'react';
import { CartItem } from "./CartItem";
import "./cart.css";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const navigate = useNavigate();
  console.log("We are in Cart");

  const initialCart = [{
    "id" : 11,
    "productName"  : "Tshirt-1",
    "price" : "100",
    "productImage" : "null",
  },
  {
    "id" : 12,
    "productName"  : "Tshirt-2",
    "price" : "169",
    "productImage" : "null",
  }
];


  const [cart, setCart] = useState(initialCart);
  const [currentCart, setCurrentCart] = useState([...initialCart]);

  const handleRemove = (id) => {
    setCurrentCart(currentCart.filter(item => item.id !== id));
  };

  const handlePlaceOrder = () => {
    console.log(currentCart);
  };

  const totalAmount = currentCart.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {currentCart.map((product) => (
          <CartItem key={product.id} data={product} onRemove={handleRemove} />
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={handlePlaceOrder}> Place Order </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};