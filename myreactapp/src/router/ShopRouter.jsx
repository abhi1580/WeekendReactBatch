import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";
// import Greetings from "../components/Greetings";
import CarList from "../components/cars/CarList";
import LoginRegister from "../components/login_register/LoginRegister";
import Electronic from "../components/electronic/Electronic";
import Mobile from "../components/electronic/mobile/Mobile";
import Laptop from "../components/electronic/laptop/Laptop";
import MobileGallery from "../components/electronic/mobile/MobileGallery";
import MobileDetails from "../components/electronic/mobile/MobileDetails";
import ContextDemo from "../components/context/ContextDemo";
import ReducerDemo from "../components/reducer/ReducerDemo";
import PageNotFount from "../components/PageNotFount";
import ShoppingCart from "../components/cart/ShoppingCart";
import Home from "../components/Home";
import RefDemo from "../components/ref/RefDemo";
import EffectDemo from "../components/effect/EffectDemo";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavBar />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<CarList />} />
          <Route path="login" element={<LoginRegister />} />
          <Route path="electronic" element={<Electronic />}>
            {/* Child routes of electronic route */}
            <Route path="mobile" element={<Mobile />}>
              <Route path="" element={<MobileGallery />} />
              <Route path="detail/:mobile_id" element={<MobileDetails />} />
            </Route>
            <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="context" element={<ContextDemo />} />
          <Route path="reducer" element={<ReducerDemo />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="ref" element={<RefDemo />} />
          <Route path="effect" element={<EffectDemo />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
