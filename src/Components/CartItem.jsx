import React, { useState } from "react";

export const CartItem = ({data, onRemove}) => {
  // const { id, productName, price, productImage } = product;
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //   useContext(ShopContext);
  console.log("The current Cart is : "+ data);

  const [quantity, setQuantity] = useState(1);
    // Create functions to handle increment and decrement
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      // Ensure quantity does not go below 1
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

  return (
    <div className="cartItem">
      <img src={data.productImage} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> Price: ${data.price}</p>
        <div className="countHandler">
          <button onClick= {handleDecrement}> - </button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}> + </button>
          <button onClick={() => onRemove(data.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
