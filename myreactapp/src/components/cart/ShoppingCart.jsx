import React, { useContext } from "react";
import { ShopContext } from "../../App";
const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <h3>No of items: {cart.length}</h3>
    </div>
  );
};

export default ShoppingCart;
