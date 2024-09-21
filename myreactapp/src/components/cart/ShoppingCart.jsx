import React, { useContext } from "react";
import { ShopContext } from "../../App";
import { FaRegTrashCan } from "react-icons/fa6";

const totalReducer = (cart) => {
  const prices = cart.map((item) => item.price);
  const cartTotal = prices.reduce((total, price) => total + price, 0);
  return cartTotal;
};

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container py-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center w-100">
          <h1 className="text-center mb-4">Your Shopping Cart</h1>
          <div className="d-flex justify-content-between w-100 mb-4">
            <h3>No. of items: {cart.length}</h3>
            <h3>
              Cart Total:{" "}
              <span className="text-success">
                &#8377; {totalReducer(cart).toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="w-100">
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.model}
                  className="list-group-item mb-3 shadow-sm rounded border-0"
                >
                  <div className="row align-items-center">
                    {/* Image Section */}
                    <div className="col-md-2 text-center">
                      <img
                        style={{
                          height: "100px",
                          width: "80px",
                          objectFit: "contain",
                        }}
                        src={item.image}
                        alt={item.model}
                        className="img-fluid"
                      />
                    </div>
                    {/* Item Details */}
                    <div className="col-md-5">
                      <h5>
                        {item.brand} {item.model}
                      </h5>
                    </div>
                    {/* Price Section */}
                    <div className="col-md-3 text-success">
                      <h4>&#8377; {item.price.toFixed(2)}</h4>
                    </div>
                    {/* Remove Button */}
                    <div className="col-md-2 text-end">
                      <button
                        title="Remove Item"
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item)}
                      >
                        <FaRegTrashCan size={24} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
