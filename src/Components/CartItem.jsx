

export const CartItem = ({data, onRemove}) => {
  // const { id, productName, price, productImage } = product;
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //   useContext(ShopContext);
  console.log("The current Cart is : "+ data);
  return (
    <div className="cartItem">
      <img src={data.productImage} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> Price: ${data.price}</p>
        <div className="countHandler">
          <button onClick={() => console.log("-")}> - </button>
          <input
            value={5}
            onChange={(e) => console.log("count updated") }
          />
          <button onClick={() => console.log("+")}> + </button>
          <button onClick={() => onRemove(data.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
