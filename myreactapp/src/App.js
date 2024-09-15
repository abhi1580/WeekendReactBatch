// import CarList from './components/cars/CarList';
// import CityList from './components/CityList';
// import Count from './components/Count';
// import CountState from './components/CountState';
// import SampleForm from './components/SampleForm';
// import Toolbar from './components/Toolbar';
// import Voter from './components/Voter';
import { createContext, useReducer } from "react";
import ShopRouter from "./router/ShopRouter";

//create global shocontext object and export it
export const ShopContext = createContext();

//create global cart reducer function
const cartReducer = (cart, action) => {
  switch (action.type) {
    case "Add TO CART":
      return [...cart, action.item];
    case "REMOVE":
      return cart.filter((cartItem) => cartItem !== action.item);
    default:
      return cart;
  }
};

function App() {
  //parent component

  const [cart, setCart] = useReducer(cartReducer, []);
  //event handlers to handle shopping
  const addToCart = (product) => {
    setCart({ type: "Add TO CART", item: product });
  };
  const removeFromCart = (cartItem) => {
    setCart({ type: "REMOVE", item: cartItem });
  };
  return (
    <div className="container">
      <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <ShopRouter />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
