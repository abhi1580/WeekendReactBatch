import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";
import Greetings from "../components/Greetings";
import CarList from "../components/cars/CarList";
import LoginRegister from "../components/login_register/LoginRegister";
import Electronic from "../components/electronic/Electronic";
import Mobile from "../components/electronic/mobile/Mobile";
import Laptop from "../components/electronic/laptop/Laptop";
import MobileGallery from "../components/electronic/mobile/MobileGallery";
import MobileDetails from "../components/electronic/mobile/MobileDetails";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavBar />}>
          <Route index element={<Greetings />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
