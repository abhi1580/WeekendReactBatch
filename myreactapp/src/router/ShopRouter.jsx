import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopNavBar from "./ShopNavBar";
import Greetings from "../components/Greetings";
import CarList from "../components/cars/CarList";
import LoginRegister from "../components/login_register/LoginRegister";

const ShopRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopNavBar />}>
        <Route index element={<Greetings/>}/>
        <Route path="cars" element={<CarList/>}/>
        <Route path="login" element={<LoginRegister/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouter;
